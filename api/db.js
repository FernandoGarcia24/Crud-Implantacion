import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud"
})

db.connect((error) =>{
     
    if(error){
        console.log('Error de coneccion', error);
        db.end();
        throw error;

    }else {
        console.log('Conexion exitosa', db.config.database);
    }
})
