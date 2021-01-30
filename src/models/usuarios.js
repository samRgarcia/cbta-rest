import Sequelize from "sequelize";
import {sequelize} from "../config/database";

const Usuarios = sequelize.define('usuarios', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        nomusuario: {
            type: Sequelize.STRING,
        },
        password: {
            type: Sequelize.STRING,
        },
        tipousuario: {
            type: Sequelize.STRING,
        },
        fechaalta: {
            type: Sequelize.STRING,
        },
        personal_id: {
            type: Sequelize.INTEGER,
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);
export default Usuarios;
