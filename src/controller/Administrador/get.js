import {listCatModalidad} from '../../service/Admistrador/listasCatalogos';
export async function getListModalida(req,res) {
    try {
        const LIST = await listCatModalidad();
        res.status(200).json(LIST)
    }catch (e) {
        console.log(e)
        res.status(500).json({message:'server error'})
    }
}
