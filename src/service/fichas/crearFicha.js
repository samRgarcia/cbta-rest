import Aspirante from '../../models/aspirante';
import DomicilioAspirante from '../../models/domaspirante';
import EscuelaProcedencia from '../../models/escuelaprocedencia';
import Tutor from "../../models/tutor";

import {deleteAspirante} from '../fichas/revertir';


export async function guardarFicha(registro) {
    try {
        const {infoPersonal, direccion, infperiodo, infProcedencia, infCarrera,infTutor} = registro;
        //console.log(registro)
        await crearASpirante(infoPersonal, infCarrera, infperiodo);
        let folio = await buscarCurp(infoPersonal.curp);
        await crearDireccionAspirante(direccion, folio);
        await crearEscuelaProcedencia(infProcedencia,folio);
        await crearTutor(infTutor,folio)
        return folio;
        //let dataAspirante = await Aspirante.findAll();
    } catch (e) {
        console.log(e)
        throw new Error(e);
    }
}

async function crearASpirante(data, carrera, infperiodo) {
    try {
        await Aspirante.create({
            nombreasp: data.nombre,
            apepat: data.primerApellido,
            apemat: data.segundoApellido,
            curp: data.curp,
            numseguro: data.imss,
            fechana: data.fechaNacimiento,
            sexo: data.sexo,
            email: data.correo,
            escivil: data.estadoCivil,
            telcasa: data.telefono,
            telcelular: data.celular,
            localidadna: data.localidadDeNacimiento,
            carreras_idcarreras: carrera.carreraInteres,
            catciclo_id: infperiodo.ciclo,
            constanciaes: data.constanciaEstudio,
            catmunicipio_nacimiento_id: data.municipioNacimiento,
        })
    } catch (e) {
        console.log(e)
        throw new Error(e);
    }
}

async function buscarCurp(curp) {
    try {
        let curpData = await Aspirante.findAll({where: {curp: curp}})
        if (curpData.length) {
            let [{folio}] = curpData;
            return folio
        }
        return curpData;
    } catch (e) {
        console.log(e)
    }
}

async function crearDireccionAspirante(data, folio) {
    try {
        await DomicilioAspirante.create({
            cp: data.cp,
            colonia: data.colonia,
            calle: data.calleNumero,
            numero: data.calleNumero,
            estado: data.estado,
            municipio: data.municipio,
            localidad: data.localidad,
            aspirante_folio: folio

        })
    } catch (e) {
        console.log(e)
        await deleteAspirante(folio)
        throw  new Error("Error al crear la direccion")
    }
}

async function crearEscuelaProcedencia(data,folio) {
    try {
        await EscuelaProcedencia.create({
            nomescuela:'' ,
            regimen_idregimen:data.regimen ,
            aspirante_folio:folio,
            catmunicipio_id: data.municipio,
            modalidad_idmodalidad: data.modalidad,
        })
    }catch (e) {
        console.log(e)
        throw new Error('Error al crear la escuela procedencia')
    }
}

async function crearTutor(data,folio) {
    try {
        await Tutor.create({
            nombre:data.nombre ,
            telefono:data.telefono ,
            correo:data.correo,
            direccion: data.direccion,
            aspirante_folio: folio,
        })
    }catch (e) {
        console.log(e)
        throw new Error('Error al crear la tutor')
    }
}

/*
{
  infoPersonal: {
    nombre: 'samuel',
    primerApellido: 'garcia',
    segundoApellido: 'jimenez',
    sexo: 'H',
    estadoNacimiento: '1',
    municipioNacimiento: '1',
    localidadDeNacimiento: '1',
    curp: 'CUNV011006MTCRRNA1',
    fechaNacimiento: '2021-01-15',
    imss: '111',
    telefono: 9161320107,
    celular: 936554879,
    correo: 'samuelrivas18@gmail.com',
    constanciaEstudio: '2',
    estadoCivil: '1'
  },
  direccion: {
    cp: '86930',
    colonia: 'PRADOS DE BALANCAN',
    calleNumero: 'verano',
    estado: '1',
    municipio: '1',
    localidad: '2'
  },
  infperiodo: { modalidad: '1', ciclo: '1' },
  infProcedencia: { estado: '1', municipio: '1', modalidad: '1', regimen: '2' },
  infCarrera: { carreraInteres: '1' }



* */
