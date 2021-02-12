import express, {json} from 'express';
import {constanciasPdf} from './controller/Archivos/pdf';
const morgan = require('morgan');
const multer = require('multer');
//const http = require('http');
const path = require('path');
const cors = require('cors');
const rutas = require('./routes/index');
const uuid = require("uuid");
const https = require('https');
const fs = require('fs');

/*const storege = multer.diskStorage({
    destination(req,file,cb) {
        cb(null,'uploads');
    },
    filename(req,file,cb){
        cb(null,path.extname(file.originalname));
    }
})*/

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT_SERVER;
       this.server = https.createServer({
        key: fs.readFileSync(__dirname + '/ssl/my_cert.key'),
        cert: fs.readFileSync(__dirname + '/ssl/my_cert.crt')
       },this.app);
    
    }
    

    middlewares() {
        //this.app.use(express.static(path.resolve(__dirname,'../public')));
        this.app.use(morgan("dev"));
        this.app.use(cors());
        this.app.use(json());
    }

    initRouter() {
        this.app.use('/api', rutas);
    }

    storeges() {
        this.app.use('/uploads', express.static(path.resolve(__dirname, '../public/constancias')));
        this.storegex = multer.diskStorage({
            destination(req, file, cb) {
                cb(null, path.resolve(__dirname, '../public/constancias'));
            },
            filename(req, file, cb) {
                cb(null, uuid.v4() + path.extname(file.originalname));
            }
        });

        this.upload = multer({storage:this.storegex});
        this.app.post('/constancias', this.upload.single('pdfs'),constanciasPdf)
    }

    execute() {
        this.middlewares();
        this.storeges();
        this.initRouter();
        this.server.listen(this.port, () => {
            console.log('Server online', this.port)
        })
    }

}

module.exports = Server;
