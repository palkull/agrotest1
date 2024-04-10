import React, {useState, useEffect} from 'react';
import { tanque } from './Dashborard';
import { readnivel } from '../servicios/compService';
import NivelChart from './graficas/nivelChart';
import descargando from '../img/descargando.png';
import '../css/home.css';

export const  Nivel = ({nivel,usuario}) => {

  const [datos, setDatos] = useState([]);
  const [fechas, setFechas] = useState([]);


  useEffect(() => {
    const fetchNivel = async (usuario) => {
      try {
        const response = await readnivel(usuario);
        setDatos(response.traernivel.datos);
        setFechas(response.traernivel.fechaInsercion); //aqui es traerph pq ese es el nombre del objeto JSON
      } catch (err) {
        console.error(err);
      }
    };

    fetchNivel(usuario);
  }, [usuario]); 


  return (
    
    <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center'}}>
      <div style={{ width: '900px', margin: 'auto', marginTop: '2rem' }}>
      <p className='titulo4'>NIVEL DE AGUA</p>
        <NivelChart usuario={usuario} fechas={fechas} datos={datos}/>
      </div>

      <div className='botonsiños'>
      <div className='box'>
               <p className='boxTitulo1'>Nivel del Agua</p>
               <p className='boxTitulo2'>{nivel}</p>
            <img src={tanque(nivel)} alt="semaforo" className="semaforo" />
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


