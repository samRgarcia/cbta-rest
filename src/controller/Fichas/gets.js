import {listaCiclo, listaModalidad} from '../../service/fichas/utilidades';

export async function getListasModalidad(req, res) {
    try {
        let lista_Modalidad = await listaModalidad();
        res.status(200).json(lista_Modalidad);
    } catch (e) {
        console.log(e)
        res.status(500).json('error server')
    }
}

export async function getListasCiclo(req, res) {
    try {
        let lista_Cliclo = await listaCiclo();
        res.status(200).json(lista_Cliclo)
    } catch (e) {
        console.log(e)
        res.status(500).json('error server')
    }
}
