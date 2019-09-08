import {Schema,model,Document} from 'mongoose';
//priomero crearemos un esquema

 const schema= new Schema({
     title: String,
     description: String,
     imagePath: String
 });

interface IFoto extends Document{
    title:string;
    description:string;
    imagePath:string
}
export default model<IFoto>('Foto',schema);