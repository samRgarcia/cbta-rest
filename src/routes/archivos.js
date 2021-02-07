import express, {Router} from 'express';
import {potContancia} from '../controller/Constancias/index';
const multer = require('multer');
const path = require('path')
//let upload= multer({dest:path.resolve(__dirname,'../public/constancias/')})



//const upload = multer({storege:storege})


const router = Router();
//router.post('/constancia',upload.single('profiles'),potContancia)
export default router;
