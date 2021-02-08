import {registrarCatModalidad} from '../../service/Admistrador/listasCatalogos';

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
