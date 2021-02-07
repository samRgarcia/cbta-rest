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
        catmunicipio_id: {
            type: Sequelize.INTEGER,
        },
        regimen_idregimen: {
            type: Sequelize.INTEGER,
        },
        aspirante_folio: {
            type: Sequelize.INTEGER,
        },
        modalidad_idmodalidad: {
            type: Sequelize.INTEGER,
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);
export default Escuelaprocedencia;
