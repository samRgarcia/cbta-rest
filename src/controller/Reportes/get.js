import {listaAspirantes} from '../../service/reportes/listas';
export async function getListaAspirantes(req,res) {
    try {
       let data = await listaAspirantes();
        res.status(200).json(data)
    }catch (e) {
        console.log(e)
        res.status(500).json('error server')
    }
}
