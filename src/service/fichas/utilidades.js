import Catmodalidad from '../../models/catmodalidad';
import Modalidad from '../../models/modalidad';
import Regimen from '../../models/regimen';
import Carreras from "../../models/carreras";
import Catciclo from '../../models/catciclo';
import Aspirante from "../../models/aspirante";
import {sequelize} from "../../config/database";


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
        where: {
            cbtas_idcbtas: idCbtas
        }
    });
    return data;
}

export async function listaCiclo(idCbtas) {
    Catciclo.hasMany(Catmodalidad,{foreignKey:'id',sourceKey:'catmodalidad_id'})
    Catmodalidad.belongsTo(Catciclo,{foreignKey:'id',targetKey:'catmodalidad_id'})
    let data = await Catciclo.findAll({
        where: {
            cbtas_idcbtas: idCbtas
        },
        include:[{model:Catmodalidad, required: true}],
        raw:true,
        nest:true
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


export async function listaComprobante(folio) {
    console.log(folio)
    try {
        const subjectList = await sequelize.query(
                            `SELECT 
                concat(aspirante.nombreasp,' ',aspirante.apepat,' ',aspirante.apemat) as aspirante,
                aspirante.curp,
                tutor.nombre as tutornombre,
                concat(domaspirante.cp,' ',domaspirante.colonia,',',domaspirante.calle,',',catalogomunicipios.nombreMunicipio,',',catalogoestados.nombreEstado) as direccion,
                carreras.descripcion as carrera
                 FROM aspirante
                inner join tutor on aspirante.folio = tutor.aspirante_folio
                inner join carreras ON aspirante.carreras_idcarreras=carreras.idcarreras
                inner join domaspirante ON aspirante.folio=domaspirante.aspirante_folio
                inner join catalogomunicipios on domaspirante.municipio=catalogomunicipios.idMunicipio
                inner join catalogoestados on catalogomunicipios.catalogoestados_idEstado=catalogoestados.idEstado
                where aspirante.folio =:folio`,
            {
                replacements: {folio: folio},
                type:sequelize.QueryTypes.SELECT,
                raw: true,
                nest: true
            }
        );
        return subjectList
    } catch (e) {
        console.log(e)
        return []
    }
}

export async function listaComprobanteCurp(curp) {
    console.log('curp',curp)
    try {
        const subjectList = await sequelize.query(
            `SELECT 
                concat(aspirante.nombreasp,' ',aspirante.apepat,' ',aspirante.apemat) as aspirante,
                aspirante.curp,
                tutor.nombre as tutornombre,
                concat(domaspirante.cp,' ',domaspirante.colonia,',',domaspirante.calle,',',catalogomunicipios.nombreMunicipio,',',catalogoestados.nombreEstado) as direccion,
                carreras.descripcion as carrera
                 FROM aspirante
                inner join tutor on aspirante.folio = tutor.aspirante_folio
                inner join carreras ON aspirante.carreras_idcarreras=carreras.idcarreras
                inner join domaspirante ON aspirante.folio=domaspirante.aspirante_folio
                inner join catalogomunicipios on domaspirante.municipio=catalogomunicipios.idMunicipio
                inner join catalogoestados on catalogomunicipios.catalogoestados_idEstado=catalogoestados.idEstado
                where aspirante.curp =:curp`,
            {
                replacements: {curp: curp},
                type:sequelize.QueryTypes.SELECT,
                raw: true,
                nest: true
            }
        );
        return subjectList
    } catch (e) {
        console.log(e)
        return []
    }
}
