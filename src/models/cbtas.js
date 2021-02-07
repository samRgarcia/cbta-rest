import Sequelize from "sequelize";
import {sequelize} from "../config/database";

const Cbtas = sequelize.define('cbtas', {
        idcbtas: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        nombre: {
            type: Sequelize.STRING,
        }, clave: {
            type: Sequelize.STRING,
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);
export default Cbtas;
