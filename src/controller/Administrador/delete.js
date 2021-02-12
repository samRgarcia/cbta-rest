import {borrarCatCiclosId, borrarCatModalidadId} from '../../service/Admistrador/listasCatalogos';

export async function deleteModalidadId(req, res) {
    try {
        const id = req.query
        if (id) {
            await borrarCatModalidadId(id)
            res.status(200).json({message:'Eliminado'})
        }else{
            res.status(400).json({message:'Parametros invalidos'})
        }
    } catch (e) {
        console.log(e)
        res.status(500).json({message: 'server error'})
    }
}

export async function deleteCiclosId(req, res) {
    try {
        const id = req.query
        if (id) {
            await borrarCatCiclosId(id)
            res.status(200).json({message:'Eliminado'})
        }else{
            res.status(400).json({message:'Parametros invalidos'})
        }
    } catch (e) {
        console.log(e)
        res.status(500).json({message: 'server error'})
    }
}
export async function deleteCarrerasId(req, res) {
    try {
        const id = req.query
        if (id) {
            await borrarCatCarrerasId(id)
            res.status(200).json({message:'Eliminado'})
        }else{
            res.status(400).json({message:'Parametros invalidos'})
        }
    } catch (e) {
        console.log(e)
        res.status(500).json({message: 'server error'})
    }
}
