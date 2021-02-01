import {Router} from 'express';
import {getListaAspirantes} from "../controller/Reportes/get";

const router = Router();
router.get('/get/lista/aspirantes',getListaAspirantes)
export default router;
