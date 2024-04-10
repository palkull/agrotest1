import Sensor from '../models/sensor.model.js';
import humedadchart from "../models/humedadchart.model.js";
import phchart from "../models/phchart.model.js";
import temperaturachart from "../models/temperaturas.model.js";
import nivelchart from "../models/nivelchart.model.js";
import { newph, newhumedad, newnivel } from './charts.controller.js';
// Función para generar un valor aleatorio entre un rango dado

const fechaActual = new Date();


const generarValorAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Función para generar un valor aleatorio entre "Lleno" y "Medio"
const generarNivelAleatorio = () => {
  const randomValue = Math.random();
  return randomValue < 0.5 ? 'Lleno' : 'Medio';
};

export const updateSensorfake = async (res = null) => {
  try {
    // Obtener el sensor correspondiente al usuario "test"
    const sensorfake = await Sensor.findOneAndUpdate(
      { usuario: "test" },
      {
        temperaturaEstanque: generarValorAleatorio(20, 50),
        nivel: generarNivelAleatorio(), // Valor aleatorio entre "Lleno" y "Medio"
        ph: generarValorAleatorio(6, 9),
        temperaturaAmbiente: generarValorAleatorio(20, 50),
        humedadAmbiente: generarValorAleatorio(20, 50),
      }
    );

    if (!sensorfake) {
      console.error('Sensor no encontrado');
      if (res) res.status(404).send('Sensor no encontrado'); 
      return;
    }
    
    const phfake = await phchart.findOneAndUpdate(
      {usuario:"test"},
      {
        $push:{
          datos: { $each: [sensorfake.ph], $position: 0 },
          fechaInsercion: { $each: [fechaActual], $position: 0 }
        }
      },
      {new: true }
    );
    if(!phfake){console.error("mala insercion")}
    
    
    const humedadfake = await humedadchart.findOneAndUpdate(
      {usuario:"test"},
      {
        $push:{
          datos: { $each: [sensorfake.humedadAmbiente], $position: 0 },
          fechaInsercion: { $each: [fechaActual], $position: 0 }
        }
      },
      {new: true }
    );
    if(!humedadfake){console.error("mala insercion")}
    
    const nivelfake = await nivelchart.findOneAndUpdate(
      {usuario:"test"},
      {
        $push:{
          datos: { $each: [sensorfake.nivel], $position: 0 },
          fechaInsercion: { $each: [fechaActual], $position: 0 }
        }
      },
      {new: true }
    );
    if(!nivelfake){console.error("mala insercion")}
    
    const temperaturafake = await temperaturachart.findOneAndUpdate(
      {usuario:"test"},
      {
        $push:{
          datosAgua: { $each: [sensorfake.temperaturaEstanque], $position: 0 },
          datosAmbiente: { $each: [sensorfake.temperaturaAmbiente], $position: 0 },
          fechaInsercion: { $each: [fechaActual], $position: 0 }
        }
      },
      {new: true }
    );
    if(!temperaturafake){console.error("mala insercion")}
    

    // Envía una respuesta de éxito
    console.log('Actualización de sensor fake realizada con éxito');
    if (res) res.send('Actualización de sensor fake realizada con éxito');
  } catch (error) {
    console.error('Error interno del servidor:', error);
    if (res) res.status(500).send('Error interno del servidor');
  }
};

