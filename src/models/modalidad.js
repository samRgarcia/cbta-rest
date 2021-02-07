import Sequelize from "sequelize";
import {sequelize} from "../config/database";

const Modalidad = sequelize.define('modalidad', {
        idmodalidad: {
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
export default Modalidad;
