import {Router} from 'express';
import {crearFichas} from '../controller/Fichas/post';
import {getListasCiclo,getListasModalidad,getExistenciaCurp} from '../controller/Fichas/gets';

const router = Router();
router.post('/registrar',crearFichas);
router.get('/get/modalidad',getListasModalidad)
router.get('/get/ciclo',getListasCiclo)
router.get('/curp-verificacion',getExistenciaCurp)

export default router;