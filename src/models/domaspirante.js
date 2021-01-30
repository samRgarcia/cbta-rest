import Sequelize from "sequelize";
import {sequelize} from "../config/database";

const Domaspirante = sequelize.define('domaspirante', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        cp: {
            type: Sequelize.STRING,
        }, colonia: {
            type: Sequelize.STRING,
        }, calle: {
            type: Sequelize.STRING,
        }, numero: {
            type: Sequelize.STRING,
        }, estado: {
            type: Sequelize.INTEGER,
        }, municipio: {
            type: Sequelize.INTEGER,
        }, localidad: {
            type: Sequelize.STRING,
        }, aspirante_folio: {
            type: Sequelize.INTEGER,
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);
export default Domaspirante;
