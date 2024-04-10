import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faChartSimple, faTemperatureHalf, faHouseFloodWater, faDroplet } from '@fortawesome/free-solid-svg-icons';
import '../css/home.css';
import { Dashborard } from '../componentes/Dashborard';
import { User } from '../componentes/User';
import { Temperatura } from '../componentes/Temperatura';
import hojaLogo from '../img/hoja.png'
import { PhScreen } from '../componentes/PhScreen';
import { Nivel } from '../componentes/nivelScreen';
import { HumedadScreen } from '../componentes/HumedadScreen';
import { profile } from '../servicios/authService';
import { readSensor } from '../servicios/compService';

const HomeScreen = () => {
  const [selectedIcon, setSelectedIcon] = useState('home');
  const [userData, setUserData] = useState(null);
  const [usuario, setUsuario] = useState(localStorage.getItem('usuario') || '');
  const [temperatura, setTemperatura] = useState(null);
  const [temperaturaAmbiente, setTemperaturaAmbiente] = useState('');
  const [humedadConstante, setHumedadConstante] = useState('');
  const [nivel, setNivel] = useState('');
  const [nPH, setNPH] = useState('');
  const [response, setResponse] = useState('');
  const [estado, setEstado] = useState(''); 
  const getTokenFromCookie = () => {

    const cookies = document.cookie.split('; ');
    const tokenCookie = cookies.find(cookie => cookie.startsWith('token='));
    if (tokenCookie) {
      const token = tokenCookie.split('=')[1];
      return token;
    }
    return null;
  };
  // function sleep(ms) {
  //   return new Promise(resolve => setTimeout(resolve, ms));
  // }
  
  const getProfile = async () => {
    try {
      const token = getTokenFromCookie();
      if (!token) {
        console.error('No se encontró el token en la cookie');
        window.location.href = "/";
        return;
      }
      const res = await profile(token);
      setUserData(res.data);
      const user = res.data.usuario;
      setUsuario(user);
      localStorage.setItem('usuario', user); // Almacena el usuario en el localStorage
    } catch (error) {
      console.error('Error al obtener el perfil del usuario:', error);
    }
  };

  const fetchData = async (usuario) => {

    try {
      const response = await readSensor(usuario);
      // console.log(response);
      setResponse(response.data)
      setTemperatura(response.temperaturaEstanque);
      setTemperaturaAmbiente(response.temperaturaAmbiente);
      setHumedadConstante(response.humedadAmbiente);
      setNivel(response.nivel);
      setNPH(response.ph);
      setEstado('ok');
    } catch (error) {
      console.error('Error al obtener los datos del sensor:', error);
    }
  }

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    fetchData(usuario)
  }, [usuario]);

  const handleIconClick = (iconName) => {
    setSelectedIcon(iconName);
  };

  // console.log(nPH,temperatura,temperaturaAmbiente,nivel,humedadConstante,estado)

  const renderSelectedComponent = () => { 
    switch (selectedIcon) {
      case 'home':
        return <Dashborard nPH={nPH} temperatura={temperatura} temperaturaAmbiente={temperaturaAmbiente} nivel={nivel} humedadConstante={humedadConstante} estado={estado} />;
      case 'termometro':
        return <Temperatura temperatura={temperatura} temperaturaAmbiente={temperaturaAmbiente} usuario={usuario} />;
      case 'user':
        return <User username={usuario} userEmail={userData.email} />;
      case 'ph':
        return <PhScreen nPH={nPH} usuario={usuario} />;
      case 'nivel':
        return <Nivel nivel={nivel} usuario={usuario} />;
      case 'humedad':
        return <HumedadScreen humedadConstante={humedadConstante} usuario={usuario}/>;
      default:
        return null;
    }
  };

  return (
    <div className='cuerpo'>
      <div className='header'>
        <img src={hojaLogo} alt="" className="logoPrincipal" />
        <div className='iconos'>
          <FontAwesomeIcon
            icon={faHome}
            className={selectedIcon === 'home' ? 'icon selected' : 'icon'}
            onClick={() => handleIconClick('home')}
          />
          <FontAwesomeIcon
            icon={faChartSimple}
            className={selectedIcon === 'ph' ? 'icon selected' : 'icon'}
            onClick={() => handleIconClick('ph')}
          />
          <FontAwesomeIcon
            icon={faTemperatureHalf}
            className={selectedIcon === 'termometro' ? 'icon selected' : 'icon'}
            onClick={() => handleIconClick('termometro')}
          />
          <FontAwesomeIcon
            icon={faHouseFloodWater}
            className={selectedIcon === 'nivel' ? 'icon selected' : 'icon'}
            onClick={() => handleIconClick('nivel')}
          />
          <FontAwesomeIcon
            icon={faDroplet}
            className={selectedIcon === 'humedad' ? 'icon selected' : 'icon'}
            onClick={() => handleIconClick('humedad')}
          />
        </div>
        <div className='perfil'>
          <FontAwesomeIcon
            icon={faUser}
            className={selectedIcon === 'user' ? 'icon selected' : 'icon'}
            onClick={() => handleIconClick('user')}
          />
        </div>
      </div>
      <div className='contenido'>
        {renderSelectedComponent()}
      </div>
    </div>
  );
};

export default HomeScreen;
