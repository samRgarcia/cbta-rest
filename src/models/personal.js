import Sequelize from "sequelize";
import {sequelize} from "../config/database";

const Personal = sequelize.define('personal', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        nompersonal: {
            type: Sequelize.STRING,
        },
        apepat: {
            type: Sequelize.STRING,
        },
        apemat: {
            type: Sequelize.STRING,
        },
        rfc: {
            type: Sequelize.STRING,
        },
        curp: {
            type: Sequelize.STRING,
        },
        sexo: {
            type: Sequelize.STRING,
        },
        nombramiento: {
            type: Sequelize.STRING,
        },
        tipoplaza: {
            type: Sequelize.STRING,
        },
        clavepres: {
            type: Sequelize.STRING,
        },
        antiguedad: {
            type: Sequelize.INTEGER,
        },
        fechanom: {
            type: Sequelize.DATE,
        },
        direccion: {
            type: Sequelize.STRING,
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);
export default Personal;
