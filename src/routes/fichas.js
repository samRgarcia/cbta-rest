import {Router} from 'express';
import {crearFichas} from '../controller/Fichas/post';
import {
    getListasCiclo,
    getListasModalidad,
    getExistenciaCurp,
    getListasModalidadEscuela, getListasRegimen, getListasCarreraInteres, getComprobante, getComprobanteCurp
} from '../controller/Fichas/gets';

const router = Router();
router.post('/registrar',crearFichas);
router.get('/get/modalidad',getListasModalidad)
router.get('/get/modalidad/escuela',getListasModalidadEscuela)
router.get('/get/lista/regimen',getListasRegimen)
router.get('/get/lista/carrera-interes',getListasCarreraInteres)
router.get('/get/ciclo',getListasCiclo)
router.get('/curp-verificacion',getExistenciaCurp)
router.get('/comprobante',getComprobante)
router.get('/comprobante-curp',getComprobanteCurp)



export default router;
