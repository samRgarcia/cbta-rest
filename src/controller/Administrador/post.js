import {
    registrarCatCarrera,
    registrarCatCiclos,
    registrarCatModalidad
} from '../../service/Admistrador/listasCatalogos';

export async function postCatModalida(req, res) {
    try {
        const {nommodalidad} = req.body;
        console.log(nommodalidad)
        if (nommodalidad){
            await registrarCatModalidad(nommodalidad)
            res.status(200).json({message:'modalidad registrada'})
        }else {
            res.status(400).json({message:'sin Parametros'})
        }
    } catch (e) {
        res.status(500).json({message: 'server error'})
    }
}

export async function postCatCiclos(req, res) {
    try {
        const ciclos = req.body;
        console.log(ciclos)
        if (ciclos){
            await registrarCatCiclos(ciclos)
            res.status(200).json({message:'modalidad registrada'})
        }else {
            res.status(400).json({message:'sin Parametros'})
        }
    } catch (e) {
        res.status(500).json({message: 'server error'})
    }
}
export async function postCatCarrera(req, res) {
    try {
        const carrera = req.body;
        console.log(carrera)
        if (carrera){
            await registrarCatCarrera(carrera)
            res.status(200).json({message:'Carrera registrada'})
        }else {
            res.status(400).json({message:'sin Parametros'})
        }
    } catch (e) {
        res.status(500).json({message: 'server error'})
    }
}
