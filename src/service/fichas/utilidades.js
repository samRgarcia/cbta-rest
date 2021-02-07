import Catmodalidad from '../../models/catmodalidad';
import Modalidad from '../../models/modalidad';
import Regimen from '../../models/regimen';
import Carreras from "../../models/carreras";
import Catciclo from '../../models/catciclo';
import Aspirante from "../../models/aspirante";

export async function listaModalidad() {
    let data = await Catmodalidad.findAll();
    return data;
}
export async function listaModalidadEscuela() {
    let data = await Modalidad.findAll();
    return data;
}
export async function listaRegimen() {
    let data = await Regimen.findAll();
    return data;
}
export async function listaCarreraInteres(idCbtas) {
    let data = await Carreras.findAll({
        where:{
            cbtas_idcbtas:idCbtas
        }
    });
    return data;
}
export async function listaCiclo(idCbtas) {
    let data = await Catciclo.findAll({
        where: {
            cbtas_idcbtas: idCbtas
        }
    });
    return data;
}

export async function duplicidadCurp(curps) {
    let data = await Aspirante.findAll({where: {curp: curps}});
    if (data.length) {
        return false;
    }
    return true;
}
