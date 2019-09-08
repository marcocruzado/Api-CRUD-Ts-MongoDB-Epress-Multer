//LA CONFIGURACION DE MULTER PARA LA SUBIDA DE IMAGENES

import multer from 'multer';
import uuid from 'uuid/v4';
import path from 'path'

//primerp cpomfiguraremos en donde queremos poner las imagenes
//toda esta funcion solo es para cambiarle el nombre al archivco digamos que guardamos 

const storage= multer.diskStorage({
    destination:'uploads',
    filename:(req,file,cb)=>{
        cb(null,uuid()+path.extname(file.originalname));
    }
})

export default multer({storage});