import {Router} from 'express';
import {getDocConstancia, getListCarrera, getListCiclos, getListModalida} from '../controller/Administrador/get';
import {postCatCarrera, postCatCiclos, postCatModalida} from '../controller/Administrador/post';
import {putCatCarreras, putCatCiclo, putCatModalidad} from '../controller/Administrador/put';
import {deleteCarrerasId, deleteCiclosId, deleteModalidadId} from '../controller/Administrador/delete';
import Auth from '../middlewares/auths';

const router = Router();
router.get('/ciclos',Auth.verifyAdminstrador,getListCiclos);
router.post('/ciclos/add',Auth.verifyAdminstrador,postCatCiclos);
router.put('/ciclos/update',Auth.verifyAdminstrador,putCatCiclo);
router.delete('/ciclos/delete',Auth.verifyAdminstrador,deleteCiclosId)


router.get('/modalidad',Auth.verifyAdminstrador,getListModalida);
router.post('/modalidad/add',Auth.verifyAdminstrador,postCatModalida);
router.put('/modalidad/update',Auth.verifyAdminstrador,putCatModalidad);
router.delete('/modalidad/delete',Auth.verifyAdminstrador,deleteModalidadId);

router.get('/carreras',Auth.verifyAdminstrador,getListCarrera);
router.post('/carreras/add',Auth.verifyAdminstrador,postCatCarrera);
router.put('/carreras/update',Auth.verifyAdminstrador,putCatCarreras);
router.delete('/carreras/delete',Auth.verifyAdminstrador,deleteCarrerasId);

router.get('/solicitar/constacia',getDocConstancia);






export default router;
