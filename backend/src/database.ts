import {connect} from 'mongoose';

export async function startConnection() {
    
   await connect('mongodb://localhost/api-marco',{
       useNewUrlParser:true,
       useFindAndModify:false
   });

   console.log("la base de datos ya esta conectada");
   
}

