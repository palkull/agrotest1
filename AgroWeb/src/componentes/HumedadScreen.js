import React, {useState, useEffect} from 'react';
import { readhumedad } from '../servicios/compService';
import { humedadS } from './Dashborard';
import descargando from '../img/descargando.png';
import HumedadChart from './graficas/humedadChart';
import '../css/home.css';


export const  HumedadScreen = ({humedadConstante, usuario}) => {

  const [datos, setDatos] = useState([]);
  const [fechas, setFechas] = useState([]);

  
  useEffect(() => {
    const fetchHumedad = async (usuario) => {
      try {
        const response = await readhumedad(usuario);
        setDatos(response.traerhumedad.datos);
        setFechas(response.traerhumedad.fechaInsercion); //aqui es traerph pq ese es el nombre del objeto JSON
      } catch (err) {
        console.error(err);
      }
    };

    fetchHumedad(usuario);
  }, [usuario]); 

  //   useEffect(() => {
  //   console.log('Datos:', datos);
  //   console.log('Fechas:',   fechas);
  // }, [datos, fechas]);
  return (
    
    <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center'}}>
      <div style={{ width: '900px', margin: 'auto', marginTop: '2rem' }}>
      <p className='titulo4'>HUMEDAD</p>
        <HumedadChart datos={datos} fechas={fechas}/>
      </div>

      <div className='botonsiños'>
      <div className='box'>
               <p className='boxTitulo1'>% Actual:</p>
               <p className='boxTitulo2'>{humedadConstante}</p>
            <img src={humedadS(humedadConstante)} alt="semaforo" className="semaforo" />
        </div>
        <div className='box'>
               <p className='boxTitulo1'>Informe</p>
               <img src={descargando} alt="sistema" className="sistema" />
               <p className='boxTitulo3'>Descargar</p>
        </div>
      </div>
    </div>
  );
};


