import Catmodalidad from "../../models/catmodalidad";
import {where} from "sequelize";

export async function listCatModalidad() {
    let data = await Catmodalidad.findAll();
    return data
}

export async function registrarCatModalidad(data) {
    await Catmodalidad.create({
        nommodalidad:data
    })
}
export async function actualizarCatModalidad(data) {
    await Catmodalidad.update({
        nommodalidad:data.nommodalidad
    },{
        where:{
        id:data.id
        }})
}

export async function borrarCatModalidadId(data) {
    await Catmodalidad.destroy({
        where:{
            id:data.id
        }})
}
