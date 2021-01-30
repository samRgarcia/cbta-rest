import Sequelize from "sequelize";
import {sequelize} from "../config/database";

const Escuelaprocedencia = sequelize.define('escuelaprocedencia', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        nomescuela: {
            type: Sequelize.STRING,
        },
        regimenes: {
            type: Sequelize.STRING,
        },
        aspirante_folio: {
            type: Sequelize.INTEGER,
        },
        catmunicipio_id: {
            type: Sequelize.INTEGER,
        },
        catestados_id: {
            type: Sequelize.INTEGER,
        },
        catmodalidad_id: {
            type: Sequelize.INTEGER,
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);
export default Escuelaprocedencia;
