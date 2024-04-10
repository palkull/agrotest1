import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { temperatura, temperaturaAmbiente } from './datos';
import { readtemperatura } from '../servicios/compService';
import { aguaTemperatura, ambiente } from './Dashborard';
import React, {useState, useEffect} from 'react';
import descargando from '../img/descargando.png';
import '../css/home.css';
import {promedios} from './operaciones';

export const  Temperatura = ({usuario}) => {
  const [datosAmbiente, setDatosAmbiente] = useState([]);
  const [datosAgua, setDatosAgua] = useState([]);
  const [fechas, setFechas] = useState([]);

  useEffect(() => {
    const fetchTemperatura = async (usuario) => {
      try {
        const response = await readtemperatura(usuario);
        setDatosAgua(response.traertemperatura.datosAgua);
        setFechas(response.traertemperatura.fechaInsercion); //aqui es traerph pq ese es el nombre del objeto JSON
        setDatosAmbiente(response.traertemperatura.datosAmbiente);
      } catch (err) {
        console.error(err);
      }
    };

    fetchTemperatura(usuario);
  }, [usuario]); 
  
  const ambienteData = [
    { hour: '00:00', Temperatura: datosAmbiente[0] },
    { hour: '01:00', Temperatura: datosAmbiente[1] },
    { hour: '02:00', Temperatura: datosAmbiente[2] },
    { hour: '03:00', Temperatura: datosAmbiente[3] },
    { hour: '04:00', Temperatura: datosAmbiente[4] },
    { hour: '05:00', Temperatura: datosAmbiente[5] },
    { hour: '06:00', Temperatura: datosAmbiente[6] },
    { hour: '07:00', Temperatura: datosAmbiente[7] },
    { hour: '08:00', Temperatura: datosAmbiente[8] },
    { hour: '09:00', Temperatura: datosAmbiente[9] },
    { hour: '10:00', Temperatura: datosAmbiente[10] },
    { hour: '11:00', Temperatura: datosAmbiente[11] },
    { hour: '12:00', Temperatura: datosAmbiente[12] },
    { hour: '13:00', Temperatura: datosAmbiente[13] },
    { hour: '14:00', Temperatura: datosAmbiente[14] },
    { hour: '15:00', Temperatura: datosAmbiente[15] },
    { hour: '16:00', Temperatura: datosAmbiente[16] },
    { hour: '17:00', Temperatura: datosAmbiente[17] },
    { hour: '18:00', Temperatura: datosAmbiente[18] },
    { hour: '19:00', Temperatura: datosAmbiente[19] },
    { hour: '20:00', Temperatura: datosAmbiente[20] },
    { hour: '21:00', Temperatura: datosAmbiente[21] },
    { hour: '22:00', Temperatura: datosAmbiente[22] },
    { hour: '23:00', Temperatura: datosAmbiente[23] },
  ];
  
  const promedio = [
    { dia: 'Lunes', promedio: promedios(0,datosAmbiente) },
    { dia: 'Martes', promedio: promedios(24,datosAmbiente) }, 
    { dia: 'Miercoles', promedio: promedios(48,datosAmbiente) },
    { dia: 'Jueves', promedio: promedios(72,datosAmbiente) },
    { dia: 'Viernes', promedio: promedios(96,datosAmbiente) },
    { dia: 'Sabado', promedio: promedios(120,datosAmbiente) },
    { dia: 'Domingo', promedio: promedios(144,datosAmbiente) },

  ];
    
  const aguaData = [
    { hour: '00:00', Temperatura: datosAgua[0] },
    { hour: '01:00', Temperatura: datosAgua[1] },
    { hour: '02:00', Temperatura: datosAgua[2] },
    { hour: '03:00', Temperatura: datosAgua[3] },
    { hour: '04:00', Temperatura: datosAgua[4] },
    { hour: '05:00', Temperatura: datosAgua[5] },
    { hour: '06:00', Temperatura: datosAgua[6] },
    { hour: '07:00', Temperatura: datosAgua[7] },
    { hour: '08:00', Temperatura: datosAgua[8] },
    { hour: '09:00', Temperatura: datosAgua[9] },
    { hour: '10:00', Temperatura: datosAgua[10] },
    { hour: '11:00', Temperatura: datosAgua[11] },
    { hour: '12:00', Temperatura: datosAgua[12] },
    { hour: '13:00', Temperatura: datosAgua[13] },
    { hour: '14:00', Temperatura: datosAgua[14] },
    { hour: '15:00', Temperatura: datosAgua[15] },
    { hour: '16:00', Temperatura: datosAgua[16] },
    { hour: '17:00', Temperatura: datosAgua[17] },
    { hour: '18:00', Temperatura: datosAgua[18] },
    { hour: '19:00', Temperatura: datosAgua[19] },
    { hour: '20:00', Temperatura: datosAgua[20] },
    { hour: '21:00', Temperatura: datosAgua[21] },
    { hour: '22:00', Temperatura: datosAgua[22] },
    { hour: '23:00', Temperatura: datosAgua[23] },
  ];

  const promedio2 = [
    { dia: 'Lunes', promedio: promedios(0,datosAgua) },
    { dia: 'Martes', promedio: promedios(24,datosAgua) }, 
    { dia: 'Miercoles', promedio: promedios(48,datosAgua) },
    { dia: 'Jueves', promedio: promedios(72,datosAgua) },
    { dia: 'Viernes', promedio: promedios(96,datosAgua) },
    { dia: 'Sabado', promedio: promedios(120,datosAgua) },
    { dia: 'Domingo', promedio: promedios(144,datosAgua) },

  ];

  // console.log(usuario)
  return (
    <div>
    <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center'}}>
      <div style={{ width: '900px', margin: 'auto', marginTop: '2rem' }}>
      <p className='titulo4'>TEMPERATURA AMBIENTE</p>
      <div>
      <h1>A lo largo del día</h1>


      <div style={{ width: '750px',  }}>
        <LineChart
          width={750}
          height={300}
          data={ambienteData}
          margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hour" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Temperatura" stroke="#8884d8" name="°C" />
        </LineChart>
      </div>

      <h1>Promedio diario</h1>


      <div style={{ width: '750px',  marginTop: '20px' }}>
        <LineChart
          width={750}
          height={300}
          data={promedio}
          margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dia" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="promedio" stroke="#82ca9d" name="Promedio" />
        </LineChart>
      </div>
    </div>
      </div>

      <div className='botonsiños'>
      <div className='box'>
               <p className='boxTitulo1'>Temparetura ambiente</p>
               <p className='boxTitulo2'>{temperaturaAmbiente}°C</p>
            <img src={ambiente()} alt="semaforo" className="semaforo" />
        </div>
        <div className='box'>
               <p className='boxTitulo1'>Informe</p>
               <img src={descargando} alt="sistema" className="sistema" />
               <p className='boxTitulo3'>Descargar</p>
        </div>
      </div>
    </div>






    <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center'}}>
      <div style={{ width: '900px', margin: 'auto', marginTop: '2rem' }}>
      <p className='titulo5'>TEMPERATURA DEL AGUA</p>
      <div>
      <h1>A lo largo del día</h1>


      <div style={{ width: '750px',  }}>
        <LineChart
          width={750}
          height={300}
          data={aguaData}
          margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hour" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Temperatura" stroke="#8884d8" name="°C" />
        </LineChart>
      </div>

      <h1>Promedio diario</h1>


      <div style={{ width: '750px',  marginTop: '20px' }}>
        <LineChart
          width={750}
          height={300}
          data={promedio2}
          margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dia" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="promedio" stroke="#82ca9d" name="Promedio" />
        </LineChart>
      </div>
    </div>
      </div>

      <div className='botonsiños'>
      <div className='box'>
               <p className='boxTitulo1'>Temparetura en Agua</p>
               <p className='boxTitulo2'>{temperatura}°C</p>
            <img src={aguaTemperatura()} alt="semaforo" className="semaforo" />
        </div>
        <div className='box'>
               <p className='boxTitulo1'>Informe</p>
               <img src={descargando} alt="sistema" className="sistema" />
               <p className='boxTitulo3'>Descargar</p>
        </div>
      </div>
    </div>
    </div>
  );
};


