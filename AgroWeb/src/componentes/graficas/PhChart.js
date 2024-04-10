import React from 'react';
import { promedios } from '../operaciones'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const PhChart = ({datos, fechas}) => {
  // console.log(datos[0],fechas[0])
  const dataPh = [
    { hour: '00:00', pH: datos[0] },
    { hour: '01:00', pH: datos[1] },
    { hour: '02:00', pH: datos[2] },
    { hour: '03:00', pH: datos[3] },
    { hour: '04:00', pH: datos[4] },
    { hour: '05:00', pH: datos[5] },
    { hour: '06:00', pH: datos[6] },
    { hour: '07:00', pH: datos[7] },
    { hour: '08:00', pH: datos[8] },
    { hour: '09:00', pH: datos[9] },
    { hour: '10:00', pH: datos[10] },
    { hour: '11:00', pH: datos[11] },
    { hour: '12:00', pH: datos[12] },
    { hour: '13:00', pH: datos[13] },
    { hour: '14:00', pH: datos[14] },
    { hour: '15:00', pH: datos[15] },
    { hour: '16:00', pH: datos[16] },
    { hour: '17:00', pH: datos[17] },
    { hour: '18:00', pH: datos[18] },
    { hour: '19:00', pH: datos[19] },
    { hour: '20:00', pH: datos[20] },
    { hour: '21:00', pH: datos[21] },
    { hour: '22:00', pH: datos[22] },
    { hour: '23:00', pH: datos[23] },
  ];


  const promedio = [
    { dia: 'Lunes', promedio: promedios(0,datos) },
    { dia: 'Martes', promedio: promedios(24,datos) }, 
    { dia: 'Miercoles', promedio: promedios(48,datos) },
    { dia: 'Jueves', promedio: promedios(72,datos) },
    { dia: 'Viernes', promedio: promedios(96,datos) },
    { dia: 'Sabado', promedio: promedios(120,datos) },
    { dia: 'Domingo', promedio: promedios(144,datos) },

  ];

  return (
    <div>
      <h1>Escala a lo largo del día</h1>


      <div style={{ width: '750px',  }}>
        <LineChart
          width={750}
          height={300}
          data={dataPh}
          margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hour" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pH" stroke="#8884d8" name="Ph" />
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
  );
};

export default PhChart;
