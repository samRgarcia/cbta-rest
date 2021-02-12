import {Router} from 'express';
import {getListaAspirantes} from "../controller/Reportes/get";
import Auth from "../middlewares/auths";

const router = Router();
router.get('/get/lista/aspirantes',Auth.verifyAdminstrador,getListaAspirantes)
export default router;
