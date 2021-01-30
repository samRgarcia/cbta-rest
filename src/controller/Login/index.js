import {guardarUsuario, loginUser} from '../../service/login/crearUsuario';

export async function crearUsuario(req, res) {
    try {
        const {usuario, password} = req.body;
        let estatus = await guardarUsuario(usuario, password)
        res.status(200).json(estatus)
    } catch (e) {
        console.log(e)
    }
}

export async function loginUsuario(req, res) {
    try {
        const response = await loginUser('samuel@hotmail.com', '123')
        res.status(200).json(response)
    } catch (e) {
        console.log(e)
        res.status(500).json('error en el login')
    }
}
