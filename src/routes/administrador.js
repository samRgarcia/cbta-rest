import {Router} from 'express';
import {getListModalida} from '../controller/Administrador/get';
import {postCatModalida} from '../controller/Administrador/post';
import {putCatModalidad} from '../controller/Administrador/put';
import {deleteModalidadId} from '../controller/Administrador/delete';

const router = Router();
router.get('/modalidad',getListModalida);
router.post('/modalidad/add',postCatModalida);
router.put('/modalidad/update',putCatModalidad);
router.delete('/modalidad/delete',deleteModalidadId)


export default router;
