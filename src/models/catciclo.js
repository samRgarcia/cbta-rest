import Sequelize from "sequelize";
import {sequelize} from "../config/database";

const Catciclo = sequelize.define('catciclo', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        nomciclo: {
            type: Sequelize.STRING,
        },catmodalidad_id: {
            type: Sequelize.INTEGER,
        },cbtas_idcbtas: {
            type: Sequelize.INTEGER,
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);
export default Catciclo;
