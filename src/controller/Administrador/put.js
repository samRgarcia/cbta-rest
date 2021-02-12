import {
    actualizarCatCarrera,
    actualizarCatMCiclo,
    actualizarCatModalidad
} from '../../service/Admistrador/listasCatalogos';

export async function putCatModalidad(req, res) {
    try {
        let data = req.body;
        if (data) {
            await actualizarCatModalidad(data)
            res.status(200).json({message: 'Actualizado'})
        } else {
            res.status(400).json({message: 'Parametros invalidos'})
        }
    } catch (e) {
        res.status(500).json({message: 'server error'})
    }
}

export async function putCatCiclo(req, res) {
    try {
        let data = req.body;
        if (data) {
            await actualizarCatMCiclo(data)
            res.status(200).json({message: 'Actualizado'})
        } else {
            res.status(400).json({message: 'Parametros invalidos'})
        }
    } catch (e) {
        res.status(500).json({message: 'server error'})
    }
}

export async function putCatCarreras(req, res) {
    try {
        let data = req.body;
        if (data) {
            await actualizarCatCarrera(data)
            res.status(200).json({message: 'Actualizado'})
        } else {
            res.status(400).json({message: 'Parametros invalidos'})
        }
    } catch (e) {
        res.status(500).json({message: 'server error'})
    }
}
