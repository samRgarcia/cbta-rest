import {listCatCarrera, listCatCiclos, listCatModalidad} from '../../service/Admistrador/listasCatalogos';
export async function getListModalida(req,res) {
    try {
        const LIST = await listCatModalidad();
        res.status(200).json(LIST)
    }catch (e) {
        console.log(e)
        res.status(500).json({message:'server error'})
    }
}

export async function getListCiclos(req,res) {
    try {
        const{idCbtas}=req.query;
        if (idCbtas){
            let lista_Cliclo = await listCatCiclos(idCbtas);
            res.status(200).json(lista_Cliclo)
        }else{
            req.status(204).json('No idCbtas')
        }

    } catch (e) {
        console.log(e)
        res.status(500).json('error server')
    }
}
export async function getListCarrera(req,res) {
    try {
        const LIST = await listCatCarrera();
        res.status(200).json(LIST)
    }catch (e) {
        console.log(e)
        res.status(500).json({message:'server error'})
    }
}
