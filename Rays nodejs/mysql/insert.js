const con = require("./config")
function add(user) {
    var sql = "INSERT INTO students (ID, name,email,password) VALUES (?,?,?,?,) ";
    var params = [user.id, user.name, user.email, user.password];

    con.connect(function (err) {
        con.query(sql, params, function (err, result) {
            console.log("Inserted record " + result.affectedRows);
            con.end(); //close connection
        });//query
    });//connect
}
add();