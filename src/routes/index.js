const routerx = require('express-promise-router');
import fichas from './fichas';
import login from './login';
import direccion from './direccion';

const  router = routerx();
router.use('/fichas',fichas);
router.use('/login',login)
router.use('/direccion',direccion)
module.exports=router;
