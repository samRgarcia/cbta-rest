import {Router} from 'express';
import {crearFichas} from '../controller/Fichas/post';
import {getListasCiclo,getListasModalidad} from '../controller/Fichas/gets';

const router = Router();
router.post('/registrar',crearFichas);
router.get('/get/modalidad',getListasModalidad)
router.get('/get/ciclo',getListasCiclo)

export default router;
