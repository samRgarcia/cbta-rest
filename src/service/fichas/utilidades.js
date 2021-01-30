import Catmodalidad from '../../models/catmodalidad';
import Catciclo from '../../models/catciclo';


export async function listaModalidad() {
    let data = await Catmodalidad.findAll();
    return data;
}

export async function listaCiclo() {
    let data = await Catciclo.findAll();
    return data;
}
