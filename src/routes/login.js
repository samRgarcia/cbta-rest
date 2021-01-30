import {Router} from 'express';
import {crearUsuario,loginUsuario} from '../controller/Login/index';
import Secure from '../middlewares/auths';

const router = Router();
router.post('/crear/user',Secure.verifyAdminstrador,crearUsuario);
router.post('/login',loginUsuario)
export default  router;
