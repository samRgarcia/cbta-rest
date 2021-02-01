import {guardarUsuario, loginUser, validarUser} from '../../service/login/crearUsuario';

//id, nomusuario, password, tipousuario, fechaalta, personal_id
export async function crearUsuario(req, res) {
    try {
        const data = req.body;
        await guardarUsuario(data)
        res.status(200).json('Usuario creado')
    } catch (e) {
        console.log(e)
        res.status(500).json('error')
    }
}

export async function loginUsuario(req, res) {
    try {
        const {password, usuario} = req.body;
        const contraseñaDb = await validarUser(usuario)
        if (contraseñaDb) {
          const token = await loginUser(password, contraseñaDb,usuario)
            res.status(200).json({token:token})
        } else {
            res.status(400).json({ ok:false,message: 'Usuario o contraseña incorrecta.'})
        }

    } catch (e) {
        console.log(e)
        res.status(500).json('error en el login')
    }
}
