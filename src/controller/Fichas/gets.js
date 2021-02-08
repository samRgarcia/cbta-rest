import {
    listaCiclo,
    listaModalidad,
    duplicidadCurp,
    listaModalidadEscuela,
    listaRegimen, listaCarreraInteres,listaComprobante
} from '../../service/fichas/utilidades';

export async function getListasModalidad(req, res) {
    try {
        let lista_Modalidad = await listaModalidad();
        res.status(200).json(lista_Modalidad);
    } catch (e) {
        console.log(e)
        res.status(500).json('error server')
    }
}
export async function getListasModalidadEscuela(req, res) {
    try {
        let lista_Modalidad = await listaModalidadEscuela();
        res.status(200).json(lista_Modalidad);
    } catch (e) {
        console.log(e)
        res.status(500).json('error server')
    }
}

export async function getListasRegimen(req, res) {
    try {
        let lista_Modalidad = await listaRegimen();
        res.status(200).json(lista_Modalidad);
    } catch (e) {
        console.log(e)
        res.status(500).json('error server')
    }
}
export async function getListasCarreraInteres(req, res) {
    try {
        const {idCebetas}= req.query;
        if (idCebetas){
            let lista_Modalidad = await listaCarreraInteres(idCebetas);
            res.status(200).json(lista_Modalidad);
        }else{
            req.status(204).json('No idCbtas')
        }

    } catch (e) {
        console.log(e)
        res.status(500).json('error server')
    }
}
export async function getListasCiclo(req, res) {
    try {
        const{idCbtas}=req.query;
        if (idCbtas){
            let lista_Cliclo = await listaCiclo(idCbtas);
            res.status(200).json(lista_Cliclo)
        }else{
            req.status(204).json('No idCbtas')
        }

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

export async function getComprobante(req, res) {
    try {
        const {folio} = req.query;
        console.log(folio)
        let data = await listaComprobante(folio)
        res.status(200).json(data);
    } catch (e) {
        console.log(e)
        res.status(500).json('error en el server')
    }
}
