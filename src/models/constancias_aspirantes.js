import Sequelize from "sequelize";
import {sequelize} from "../config/database";

const Constancias_aspirantes = sequelize.define('constancias_aspirantes', {
        idconstancias_aspirantes: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        nombre_doc: {
            type: Sequelize.TEXT,
        },
        aspirante_folio: {
            type: Sequelize.INTEGER,
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);
export default Constancias_aspirantes;
