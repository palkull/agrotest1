import React from 'react';
import {promediosN} from '../operaciones';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const NivelChart = ({usuario, fechas, datos}) => {
  // console.log(`tu idea funciono: ${usuario}`)
  const dataNivel = [
    { hour: '00:00', Nivel: datos[0] },
    { hour: '01:00', Nivel: datos[1] },
    { hour: '02:00', Nivel: datos[2] },
    { hour: '03:00', Nivel: datos[3] },
    { hour: '04:00', Nivel: datos[4] },
    { hour: '05:00', Nivel: datos[5] },
    { hour: '06:00', Nivel: datos[6] },
    { hour: '07:00', Nivel: datos[7] },
    { hour: '08:00', Nivel: datos[8] },
    { hour: '09:00', Nivel: datos[9] },
    { hour: '10:00', Nivel: datos[10] },
    { hour: '11:00', Nivel: datos[11] },
    { hour: '12:00', Nivel: datos[12] },
    { hour: '13:00', Nivel: datos[13] },
    { hour: '14:00', Nivel: datos[14] },
    { hour: '15:00', Nivel: datos[15] },
    { hour: '16:00', Nivel: datos[16] },
    { hour: '17:00', Nivel: datos[17] },
    { hour: '18:00', Nivel: datos[18] },
    { hour: '19:00', Nivel: datos[19] },
    { hour: '20:00', Nivel: datos[20] },
    { hour: '21:00', Nivel: datos[21] },
    { hour: '22:00', Nivel: datos[22] },
    { hour: '23:00', Nivel: datos[23] },
  ];

  const promedio = [
    { dia: 'Lunes', promedio: promediosN(0,datos) },
    { dia: 'Martes', promedio: promediosN(24,datos) }, 
    { dia: 'Miercoles', promedio: promediosN(48,datos) },
    { dia: 'Jueves', promedio: promediosN(72,datos) },
    { dia: 'Viernes', promedio: promediosN(96,datos) },
    { dia: 'Sabado', promedio: promediosN(120,datos) },
    { dia: 'Domingo', promedio: promediosN(144,datos) },

  ];


  const niveles = ['Bajo', 'Medio', 'Lleno']; // Definir niveles posibles

  return (
    <div>
      <h1>Nivel a lo largo del día</h1>

      <div style={{ width: '750px' }}>
        <LineChart
          width={750}
          height={300}
          data={dataNivel}
          margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hour" />
          <YAxis type="category" ticks={niveles} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Nivel" stroke="#8884d8" name="Nivel" />
        </LineChart>
      </div>

      <h1>Promedio diario</h1>

      <div style={{ width: '750px', marginTop: '20px' }}>
        <LineChart
          width={750}
          height={300}
          data={promedio}
          margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="dia" />
          <YAxis type="category" ticks={niveles} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="promedio" stroke="#82ca9d" name="Promedio" />
        </LineChart>
      </div>
    </div>
  );
};

export default NivelChart;
