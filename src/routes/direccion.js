import {Router} from 'express';
import {getListEstados,getListMunicipios} from '../controller/Direccion/get';

const router = Router();
router.get('/estados',getListEstados);
router.get('/municipios',getListMunicipios);

export default router;
