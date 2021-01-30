import Sequelize from "sequelize";
import {sequelize} from "../config/database";

const Periodo = sequelize.define('periodo', {
        idperiodo: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        catmodalidad_id: {
            type: Sequelize.INTEGER,
        },
        catciclo_id: {
            type: Sequelize.INTEGER,
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);
export default Periodo;
