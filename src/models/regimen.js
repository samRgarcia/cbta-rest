import Sequelize from "sequelize";
import {sequelize} from "../config/database";

const Regimen = sequelize.define('regimen', {
        idregimen: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        descripcion: {
            type: Sequelize.STRING,
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);
export default Regimen;
