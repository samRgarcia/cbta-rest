import Sequelize from "sequelize";
import {sequelize} from "../config/database";

const Carreras = sequelize.define('carreras', {
        idcarreras: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        descripcion: {
            type: Sequelize.STRING,
        },
        cbtas_idcbtas: {
            type: Sequelize.INTEGER,
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);
export default Carreras;
