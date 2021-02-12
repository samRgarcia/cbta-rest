import Catmodalidad from "../../models/catmodalidad";
import Catciclo from "../../models/catciclo";
import Carreras from "../../models/carreras";

export async function listCatModalidad() {
    let data = await Catmodalidad.findAll();
    return data
}

export async function listCatCarrera() {
    let data = await Carreras.findAll();
    return data
}

export async function listCatCiclos(idCbtas) {
    Catciclo.hasMany(Catmodalidad, {foreignKey: 'id', sourceKey: 'catmodalidad_id'})
    Catmodalidad.belongsTo(Catciclo, {foreignKey: 'id', targetKey: 'catmodalidad_id'})
    let data = await Catciclo.findAll({
        where: {
            cbtas_idcbtas: idCbtas
        },
        include: [{model: Catmodalidad, required: true}],
        raw: true,
        nest: true
    });
    return data;
}


export async function registrarCatModalidad(data) {
    await Catmodalidad.create({
        nommodalidad: data
    })
}

export async function registrarCatCiclos(data) {
    await Catciclo.create({
        nomciclo: data.nomciclo,
        catmodalidad_id: data.catmodalidad_id,
        cbtas_idcbtas: data.cbtas_idcbtas
    })
}

export async function registrarCatCarrera(data) {
    await Carreras.create({
        descripcion: data.descripcion,
        cbtas_idcbtas: data.cbtas_idcbtas
    })
}


export async function actualizarCatModalidad(data) {
    await Catmodalidad.update({
        nommodalidad: data.nommodalidad
    }, {
        where: {
            id: data.id
        }
    })
}
export async function actualizarCatCarrera(data) {
    await Carreras.update({
        descripcion: data.descripcion
    }, {
        where: {
            idcarreras: data.idcarreras
        }
    })
}
export async function actualizarCatMCiclo(data) {
    await Catciclo.update({
        nomciclo: data.nomciclo,
        catmodalidad_id: data.catmodalidad_id,
    }, {
        where: {
            id: data.id
        }
    })
}

export async function borrarCatModalidadId(data) {
    await Catmodalidad.destroy({
        where: {
            id: data.id
        }
    })
}

export async function borrarCatCiclosId(data) {
    await Catciclo.destroy({
        where: {
            id: data.id
        }
    })
}

export async function borrarCatCarrerasId(data) {
    await Carreras.destroy({
        where: {
            idcarreras: data.idcarreras
        }
    })
}
