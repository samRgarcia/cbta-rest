import Catmodalidad from '../../models/catmodalidad';
import Catciclo from '../../models/catciclo';
import Aspirante from "../../models/aspirante";

export async function listaModalidad() {
    let data = await Catmodalidad.findAll();
    return data;
}

export async function listaCiclo() {
    let data = await Catciclo.findAll();
    return data;
}

export async function duplicidadCurp(curps) {
    let data = await Aspirante.findAll({where: {curp: curps}});
    if (data.length){
        return false;
    }
    return true;
}
