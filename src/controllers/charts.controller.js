import humedadchart from "../models/humedadchart.model.js";
import phchart from "../models/phchart.model.js";
import nivelchart from "../models/nivelchart.model.js";
import temperaturachart from "../models/temperaturas.model.js"

const fechaActual = new Date();

export const createphdata=async(req,res)=>{
    const {
        usuario,
        
        }=req.body
        try{
        const newphchart= new phchart({
            usuario
        });
        const saveph = await newphchart.save()
res.send("funcione")
    } catch (error){
        console.log(error)
    }
}
export const createniveldata=async(req,res)=>{
    const {
        usuario,
        
        }=req.body
        try{
        const newnivelchart= new nivelchart({
            usuario
        });
        const savenivel = await newnivelchart.save()
res.send("funcione")
    } catch (error){
        console.log(error)
    }
}

export const createhumedaddata=async(req,res)=>{
    const {
        usuario
        }=req.body
        try{
        const newhumedadchart= new humedadchart({
            usuario
        });
        const savehumedad = await newhumedadchart.save()
        res.send("funcione")
    } catch (error){
        console.log(error)
    }
}

export const createtemperaturadata=async(req,res)=>{
    const {
        usuario
        }=req.body
        try{
        const newtemperaturachart= new temperaturachart({
            usuario
        });
        const savetemperatura = await newtemperaturachart.save()
        res.send("funcione")
    } catch (error){
        console.log(error)
    }
}

export const newph = async (req, res) => {
    const { usuario, dato } = req.body;
    try {
        const datoadded = await phchart.findOneAndUpdate(
            { usuario: usuario  },
            {
                $push: {
                    datos: { $each: [dato], $position: 0 },
                    fechaInsercion: { $each: [fechaActual], $position: 0 }
                }
            },
            { new: true }
        );

        if (!datoadded) {
            return res.status(404).send('No se encontró el documento');
        }
        res.send(datoadded);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error interno del servidor');
    }
};

export const newhumedad = async (req, res) => {
    const { usuario, dato } = req.body;
    try {
        const datoadded = await humedadchart.findOneAndUpdate(
            { usuario: usuario  },
            {
                $push: {
                    datos: { $each: [dato], $position: 0 },
                    fechaInsercion: { $each: [fechaActual], $position: 0 }
                }
            },
            { new: true }
        );

        if (!datoadded) {
            return res.status(404).send('No se encontró el documento');
        }
        res.send(datoadded);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error interno del servidor');
    }
};

export const newnivel = async (req, res) => {
    const { usuario, dato } = req.body;
    try {
        const datoadded = await nivelchart.findOneAndUpdate(
            { usuario: usuario  },
            {
                $push: {
                    datos: { $each: [dato], $position: 0 },
                    fechaInsercion: { $each: [fechaActual], $position: 0 }
                }
            },
            { new: true }
        );

        if (!datoadded) {
            return res.status(404).send('No se encontró el documento');
        }
        res.send(datoadded);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error interno del servidor');
    }
};


export const newtemperatura = async (req, res) => {
    const { usuario, datosAgua, datosAmbiente } = req.body;
    try {
        const datoadded = await temperaturachart.findOneAndUpdate(
            { usuario: usuario  },
            {
                $push: {
                    datosAgua: { $each: [datosAgua], $position: 0 },
                    datosAmbiente: { $each: [datosAmbiente], $position: 0 },
                    fechaInsercion: { $each: [fechaActual], $position: 0 }
                }
            },
            { new: true }
        );

        if (!datoadded) {
            return res.status(404).send('No se encontró el documento');
        }
        res.send(datoadded);
    } catch (error) {
        console.log(error);
        res.status(500).send('Error interno del servidor');
    }
};


    export const readph = async (req,res) =>{
        const {usuario} = req.params;
        try{
            const traerph = await phchart.findOne({usuario: usuario})
            if (!traerph){return res.status(404).send('Usuario no encontrado')}
            return res.send({traerph})
        }catch (error){
            console.error(error)
        }
    }

    export const readnivel = async (req,res) =>{
        const {usuario} = req.params;
        try{
            const traernivel = await nivelchart.findOne({usuario: usuario})
            if (!traernivel){return res.status(404).send('Usuario no encontrado')}
            return res.send({traernivel})
        }catch (error){
            console.error(error)
        }
    }

    export const readhumedad= async (req,res) =>{
        const {usuario} = req.params;
        try{
            const traerhumedad = await humedadchart.findOne({usuario: usuario})
            if (!traerhumedad){return res.status(404).send('Usuario no encontrado')}
            return res.send({traerhumedad})
        }catch (error){
            console.error(error)
        }
    }

    export const readtemperatura = async (req,res) =>{
        const {usuario} = req.params;
        try{
            const traertemperatura = await temperaturachart.findOne({usuario: usuario})
            if (!traertemperatura){return res.status(404).send('Usuario no encontrado')}
            return res.send({traertemperatura})
        }catch (error){
            console.error(error)
        }
    }