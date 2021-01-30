import Aspirante from '../../models/aspirante';


export async function guardarFicha(registro){
    try {
        //const {infoPersonal,direccion,infperiodo,infProcedencia,infCarrera} = registro;
        //console.log(registro)
       await crearASpirante(registro);

        let dataAspirante = await Aspirante.findAll();
        console.log(dataAspirante)
    }catch (e) {
        console.log(e)
        throw new Error(e);
    }
}

 async function crearASpirante(data){
    try {
        await Aspirante.create({
            nombreasp: data.nombre,
            apepat: data.primerApellido,
            apemat: data.segundoApellido,
            curp: 'xxxxxxxxxx',
            numseguro: 'aaaaaa',
            fechana: new Date(),
            sexo: 'NA',
            email: 'sam@hotmail.com',
            escivil: 'Casado',
            telcasa: 2323223,
            telcelular: 2323232,
            localidadna: 'dwdwdd',
            constanciaes:2,
            carrerasinteres: "tcis",
            periodo_idperiodo: 1,
            catestados_nacimiento_id: 4 ,
            catmunicipio_nacimiento_id:36,
        })
    }catch (e) {
        console.log(e)
        throw new Error(e);
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
