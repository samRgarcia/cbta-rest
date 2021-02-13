import Sequelize from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host:process.env.DB_HOST,
        dialect:"mysql",
        port:process.env.DB_PORT || '3306',
        pool:{
            max:5,
            min:0,
            require: 30000,
            idle: 10000
        }
    }
);
sequelize.authenticate()
    .then(()=>{
        console.log('successfully')
    })
    .catch(error=> console.error('database:',error))
