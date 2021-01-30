import express,{json} from'express';
const  morgan = require('morgan');
const http = require('http');
const path = require('path');
const cors = require('cors');
const rutas = require('./routes/index');

class Server{
    constructor() {
    this.app = express();
    this.port = process.env.PORT_SERVER;
    this.server = http.createServer(this.app);
    }

    middlewares(){
        this.app.use(express.static(path.resolve(__dirname,'../public')));
        this.app.use(morgan("dev"));
        this.app.use(cors());
        this.app.use(json());
    }
    initRouter(){
        this.app.use('/api',rutas);
    }

    execute(){
        this.middlewares();
        this.initRouter();
        this.server.listen(this.port,()=>{
            console.log('Server online',this.port)
        })
    }

}
module.exports = Server;
