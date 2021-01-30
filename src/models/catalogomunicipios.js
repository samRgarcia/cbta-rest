import Sequelize from "sequelize";
import {sequelize} from "../config/database";

const Catalogomunicipios = sequelize.define('catalogomunicipios', {
        idMunicipio: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        nombreMunicipio: {
            type: Sequelize.STRING,
        },
        catalogoEstados_idEstado: {
            type: Sequelize.STRING,
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);


export default Catalogomunicipios;
