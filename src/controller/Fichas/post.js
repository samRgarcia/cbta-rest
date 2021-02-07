import {guardarFicha} from '../../service/fichas/crearFicha';

export async function crearFichas(req,res) {
    try {
        const {registro}=req.body;
       let folio = await guardarFicha(registro)
        res.status(200).json({folio:folio})
    }catch (e) {
        console.log(e)
        res.status(500).json('500s')
    }
}
