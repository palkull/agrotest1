import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {promedios} from '../operaciones';
const HumedadChart = ({datos,fechas}) => {
  const humedadData = [
    { hour: '00:00', Humedad: datos[0] },
    { hour: '01:00', Humedad: datos[1] },
    { hour: '02:00', Humedad: datos[2] },
    { hour: '03:00', Humedad: datos[3] },
    { hour: '04:00', Humedad: datos[4] },
    { hour: '05:00', Humedad: datos[5] },
    { hour: '06:00', Humedad: datos[6] },
    { hour: '07:00', Humedad: datos[7] },
    { hour: '08:00', Humedad: datos[8] },
    { hour: '09:00', Humedad: datos[9] },
    { hour: '10:00', Humedad: datos[10] },
    { hour: '11:00', Humedad: datos[11] },
    { hour: '12:00', Humedad: datos[12] },
    { hour: '13:00', Humedad: datos[13] },
    { hour: '14:00', Humedad: datos[14] },
    { hour: '15:00', Humedad: datos[15] },
    { hour: '16:00', Humedad: datos[16] },
    { hour: '17:00', Humedad: datos[17] },
    { hour: '18:00', Humedad: datos[18] },
    { hour: '19:00', Humedad: datos[19] },
    { hour: '20:00', Humedad: datos[20] },
    { hour: '21:00', Humedad: datos[21] },
    { hour: '22:00', Humedad: datos[22] },
    { hour: '23:00', Humedad: datos[23] },
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
      <h1>Porcentaje a lo largo del día</h1>


      <div style={{ width: '750px',  }}>
        <LineChart
          width={750}
          height={300}
          data={humedadData}
          margin={{ top: 10, right: 30, left: 20, bottom: 10 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="hour" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Humedad" stroke="#8884d8" name="%" />
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

export default HumedadChart;
