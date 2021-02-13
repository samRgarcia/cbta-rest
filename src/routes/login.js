import {Router} from 'express';
import {crearUsuario,loginUsuario} from '../controller/Login/index';

const router = Router();
router.post('/crear/user',crearUsuario);
router.post('/login',loginUsuario)
export default  router;
