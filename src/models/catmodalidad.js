import Sequelize from "sequelize";
import {sequelize} from "../config/database";

const Catmodalidad = sequelize.define('catmodalidad', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        nommodalidad: {
            type: Sequelize.STRING,
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);
export default Catmodalidad;
