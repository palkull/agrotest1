import React, { useState, useEffect } from 'react';
import PhChart from './graficas/PhChart';
import descargando from '../img/descargando.png';
import { semaforoPH } from './Dashborard';
import { readph } from '../servicios/compService';
// import promedios from './operaciones'
import '../css/home.css';


export const PhScreen = ({ nPH, usuario }) => {
  const [datos, setDatos] = useState([]);
  const [fechas, setFechas] = useState([]);

  useEffect(() => {
    const fetchPh = async (usuario) => {
      try {
        const response = await readph(usuario);
        setDatos(response.traerph.datos);
        setFechas(response.traerph.fechaInsercion); //aqui es traerph pq ese es el nombre del objeto JSON
      } catch (err) {
        console.error(err);
      }
    };

    fetchPh(usuario);
  }, [usuario]); 







  // useEffect(() => {
  //   console.log('Datos:', datos);
  //   console.log('Fechas:',   fechas);
  // }, [datos, fechas]);

  return (
    <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center' }}>
      <div style={{ width: '900px', margin: 'auto', marginTop: '2rem' }}>
        <p className='titulo4'>PH</p>
        <PhChart datos={datos} fechas={fechas} />
      </div>
      <div className='botonsiños'>
        <div className='box'>
          <p className='boxTitulo1'>ph Actual:</p>
          <p className='boxTitulo2'>{nPH}</p>
          <img src={semaforoPH(nPH)} alt="semaforo" className="semaforo" />
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
