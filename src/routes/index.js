const routerx = require('express-promise-router');
import fichas from './fichas';
import login from './login';
import direccion from './direccion';
import reporte from './reporte';

const  router = routerx();
router.use('/fichas',fichas);
router.use('/login',login);
router.use('/direccion',direccion);
router.use('/reporte',reporte);

module.exports=router;
