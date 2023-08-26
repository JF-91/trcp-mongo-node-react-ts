import  { connect } from "mongoose";


export const dbconnect  = async () =>{
    try {
      const db =  await connect('mongodb://127.0.0.1:27017/trpcdb')
        console.log('base de datos conectado a', db.connection.db.databaseName);
        
    } catch (error) {
        if(error instanceof Error){

            console.log(error.message);
        }
        
    }
}