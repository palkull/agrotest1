import mongoose from "mongoose";
let conexion

export const connectDB = async () => {

    try {
        await mongoose.connect('mongodb+srv://palkulx2000:Palkulito20@test.jbkrcvl.mongodb.net/?retryWrites=true&w=majority&appName=test')
        console.log('>>>>> Conectado')
        conexion = 'ok'
        
    } catch (error) {
        console.log(error)     
        conexion = 'notok'   
    }

}
export const estado = async () =>{
    const estado = {
        estadoConexion : conexion
    }
    res.send(estado)
}