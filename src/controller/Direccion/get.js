import {listaEstados, listaMunicipios} from '../../service/fichas/direccion';

export async function getListMunicipios(req, res) {
    try {
        const {id}=req.query;
        let data = await listaMunicipios(id);
        res.status(200).json(data)
    } catch (e) {
        res.status(500).json("server error")
    }
}

export async function getListEstados(req, res) {
    try {
        const data = await listaEstados();
        res.status(200).json(data)
    } catch (e) {
        res.status(500).json("server error")
    }
}
