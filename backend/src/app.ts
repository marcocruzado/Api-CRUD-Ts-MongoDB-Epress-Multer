import  express from 'express';
import morgan from 'morgan';
import indexRoutes from './routes/index';
import path from 'path'
//al inico me sale error por que es typescript para arreglarlo solo instalamos 
//algo asi como librerias para que entiendan que estoy poniendo 
// npm i @types/express -D por que sera una dependencia de desarrollo
//ademas para que sea mas facil importar todo l que queramon instalamos un paquete dentro de 
//VSCode que se llama React Snipets

const app =express();

//configuracion

app.set('port', process.env.port ||3000);

//MIDDELWEARS
app.use(morgan('dev'));
app.use(express.json());

//rutas
app.use('/api',indexRoutes);

//folfer para almacenar achivos punlicos
app.use('/uploads',express.static(path.resolve('uploads')));



export default app;
