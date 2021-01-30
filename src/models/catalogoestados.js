import Sequelize from "sequelize";
import {sequelize} from "../config/database";

const Catalogoestados = sequelize.define('catalogoestados', {
        idEstado: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        nombreEstado: {
            type: Sequelize.STRING,
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);
export default Catalogoestados;
