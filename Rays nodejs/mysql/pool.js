const mysql = require("mysql2");

const pool = mysql.createPool({
    connectionLimit: 5,
    host: "localhost",
    user: "root",
    password: "root",
    port: 3306,
    database: "school"
})

function get(id) {
    var sql = "SELECT * FROM students"
    pool.getConnection(function (err, con) {

        if (err) throw err;

        con.query(sql, function (err, rows, fields) {

            if (err) throw err;
            console.log(rows[0])
            // con.release();//release connection
            
        });//query

    });//connect
};

for (let i = 1; i <= 20; i++) {
    console.log(i+"  "+get(1));
}


// pool.getConnection("SELECT * FROM TABLE_NAME",(err, data) => {
//     if(err) {
//         console.error(err);
//         return;
//     }
//     // rows fetch
//     console.log(data);
// });