import Sequelize from "sequelize";
import {sequelize} from "../config/database";

const Aspirante = sequelize.define('aspirante', {
        folio: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        nombreasp: {
            type: Sequelize.STRING,
        },
        apepat: {
            type: Sequelize.STRING
        },
        apemat: {
            type: Sequelize.STRING
        },
        curp: {
            type: Sequelize.STRING
        },
        numseguro: {
            type: Sequelize.STRING
        },
        fechana: {
            type: Sequelize.DATE
        },
        sexo: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        escivil: {
            type: Sequelize.STRING
        },
        telcasa: {
            type: Sequelize.STRING
        },
        telcelular: {
            type: Sequelize.STRING
        },
        localidadna: {
            type: Sequelize.STRING
        },
        constanciaes: {
            type: Sequelize.STRING
        },
        catmunicipio_nacimiento_id: {
            type: Sequelize.INTEGER
        },
        catciclo_id: {
            type: Sequelize.INTEGER
        },
        carreras_idcarreras: {
            type: Sequelize.INTEGER
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);


export default Aspirante;
