import {listaCiclo, listaModalidad, duplicidadCurp} from '../../service/fichas/utilidades';

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

export async function getExistenciaCurp(req, res) {
    try {
        const {curp} = req.query;
        let data = await duplicidadCurp(curp);
        res.status(200).json(data);
    } catch (e) {
        console.log(e)
        res.status(500).json('error en el server')
    }
}
