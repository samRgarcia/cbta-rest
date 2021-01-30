import jwt from 'jsonwebtoken';
import configs from '../config/auth';

const secret = configs.jwt.secret;

export default {
    verifyAdminstrador: async (req, res, next) => {
        const Roles = ['Administrador'];
        const token = await req.headers.authorization && req.headers.authorization.split('Bearer ')[1];

        if (!token) {
            return res.status(404).send({messge: 'No token'});
        }
        const userId = await jwt.verify(token, secret,{expiresIn: '1h'})
        console.log(userId)

        //TODO: verificar en db
        if (userId) {
    next();
        } else {
    res.status(403).send({
        messge:'No autorizado'
    })
        }
    }
}
