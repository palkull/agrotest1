import mqtt from 'mqtt';
import { createSensor } from './controllers/sensor.controller.js'; // Asegúrate de tener la ruta correcta

const client = mqtt.connect('mqtt://test.mosquitto.org');
export const  hola = () => {
    client.on('connect', function () {
        client.subscribe('/temperatura', function (err) {
            if (err) {
                console.error('Error al suscribirse al tema:', err);
            } else {
                console.log('Conectado al servidor MQTT y suscrito al tema /temperatura');
            }
        });
    });
    
    client.on('message', async function (topic, message) {
        // message is Buffer
        const data = JSON.parse(message.toString()); // Si los datos recibidos están en formato JSON
        try {
            // Llama a la función createSensor para guardar los datos en MongoDB
            await createSensor(data);
            console.log('Datos almacenados en MongoDB correctamente:', data);
        } catch (error) {
            console.error('Error al guardar los datos en MongoDB:', error);
        }
    });
    
}
