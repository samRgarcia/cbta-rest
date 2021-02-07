const bcrypt = require('bcrypt');
import jwt from 'jsonwebtoken';
import configs from '../../config/auth';
import Usuarios from '../../models/usuarios';
import Personal from "../../models/personal";

const secret = configs.jwt.secret;

async function encode(password) {
    return await bcrypt.hash(password, 5)
}

function sing(data) {
    return jwt.sign(data, secret, {expiresIn: '1h'});
}

function comparePassword(password, dbPassword,usuario) {
    return bcrypt.compare(password, dbPassword)
        .then(sonIguales => {
            if (sonIguales === true) {
                //TODO: generar token
                let data = {userId:230}
                return sing(data)
            } else {
                throw new Error('Infomacion invalida');
            }
        })
}

export async function guardarUsuario(data) {
    try {
        const {
            nompersonal,
            apepat,
            apemat,
            rfc,
            curp,
            sexo,
            nombramiento,
            tipoplaza,
            clavepres,
            antiguedad,
            fechanom,
            direccion,
            usuario,
            password,
            tipousuario
        } = data;
        let newPassword = await encode(password)
        await Personal.create({
            nompersonal,
            apepat,
            apemat,
            rfc,
            curp,
            sexo,
            nombramiento,
            tipoplaza,
            clavepres,
            antiguedad,
            fechanom,
            direccion,
            usuario,
            password:newPassword,
            tipousuario


        });
    } catch (e) {
        console.log(e)
        throw new Error('Error al crear el usuario')
    }
}

let data = [{name: 'samuel@hotmail.con', password: "$2b$05$N0mYRnTISiE09leu7nnATuOKHLL8yZB6VpTL4gV/S7aWZW6Mqw7dC"}]

export async function loginUser(password, contraseñaDb,usuario) {
    try {
        let token = await comparePassword(password, contraseñaDb,usuario)
        return token;
    } catch (e) {
        throw new Error('Infomacion invalida');
    }
}


export async function validarUser(usuario) {
    try {
        const userData = await Personal.findOne({where: {usuario: usuario}})
        if (userData) {
            return userData.password
        }
        return false
    } catch (e) {
        console.log(e)
        //throw new Error('Error al buscar usuario')
    }

}
