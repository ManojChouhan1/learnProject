const mysql = require("mysql2");

const con = mysql.createConnection({
    host : "localhost",
    port : 3306,
    user : "root",
    password :"root",
    database : "school"
});

// con.connect((err)=>{
//     if(err){
//         console.log("error")
//     }else{
//         console.log("connected")
//     }
// })
module.exports=con;