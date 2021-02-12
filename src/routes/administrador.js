import {Router} from 'express';
import {getListCarrera, getListCiclos, getListModalida} from '../controller/Administrador/get';
import {postCatCarrera, postCatCiclos, postCatModalida} from '../controller/Administrador/post';
import {putCatCarreras, putCatCiclo, putCatModalidad} from '../controller/Administrador/put';
import {deleteCarrerasId, deleteCiclosId, deleteModalidadId} from '../controller/Administrador/delete';

const router = Router();
router.get('/ciclos',getListCiclos);
router.post('/ciclos/add',postCatCiclos);
router.put('/ciclos/update',putCatCiclo);
router.delete('/ciclos/delete',deleteCiclosId)


router.get('/modalidad',getListModalida);
router.post('/modalidad/add',postCatModalida);
router.put('/modalidad/update',putCatModalidad);
router.delete('/modalidad/delete',deleteModalidadId);

router.get('/carreras',getListCarrera);
router.post('/carreras/add',postCatCarrera);
router.put('/carreras/update',putCatCarreras);
router.delete('/carreras/delete',deleteCarrerasId);





export default router;
