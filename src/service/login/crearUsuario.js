const bcrypt = require('bcrypt');
import jwt from 'jsonwebtoken';
import configs from '../../config/auth';

const secret = configs.jwt.secret;

async function encode(password) {
    return await bcrypt.hash(password, 5)
}

function sing(data) {
    return jwt.sign(data, secret,{expiresIn: '1h'});
}

function comparePassword(password, dbPassword) {
    return bcrypt.compare(password, dbPassword)
        .then(sonIguales => {
            if (sonIguales === true) {
                //TODO: generar token
                let data = {id: 12, name: "Samuel Rivas", rol: "administrador"}
                return sing(data)

            } else {
                throw new Error('Infomacion invalida');
            }
        })
}

export async function guardarUsuario(email, password) {
    let newPassword = await encode(password)
    console.log(email, newPassword)
    return {email, newPassword}
}

let data = [{name: 'samuel@hotmail.con', password: "$2b$05$N0mYRnTISiE09leu7nnATuOKHLL8yZB6VpTL4gV/S7aWZW6Mqw7dC"}]

export async function loginUser(email, password) {
    try {
        // TODO: validar que el usuario exista en la base de datos

        let token = await comparePassword(password, data[0].password)

        return token;
    } catch (e) {
        throw new Error('Infomacion invalida');
    }


}
