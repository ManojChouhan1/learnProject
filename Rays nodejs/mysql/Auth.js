const con = require("./config")

// const selectData = (id) => {
//     const sql = "SELECT * FROM students where id=" + id;
//     // con.connect(function (err) {
//         con.query(sql, (err, result, metadata) => {
//             if (err) throw "Error"
//             console.log(result[0]);
//             con.end();
//         })
//     // })
// }
// selectData(5)

// select with parameter Athuntification// // //

const athuntication = (email, password) => {
    const sql = "SELECT * FROM students where email=? and password=?";

    // con.connect(function (err) {

    con.query(sql, [email, password], (err, result, metadata) => {

        if (err) throw "Error"
        console.log(result[0]);
        console.log("Name-->", result[0].name);
        con.end();

    })

    // })
}
// athuntication("manoj@gmail.com", "12345")


function nextId(callback) {
    const sql = "select max(id) as id from students";

    con.query(sql, function (err, result) {
        if (err) {
            console.log(err.code)
            // console.log(err.fatal)
        }
        console.log("result.affectedRows-->", result[0].id + 1);

        return callback(result[0].id + 1);
    })
}

function insertData(user) {
    const sql = "INSERT INTO students (id, name, email, password, sallary) values(?, ?, ?, ?, ?)";

    nextId((result) => {
        console.log(result)
        const params = [result, user.name, user.email, user.password, user.sallary];

        con.connect(function (err) {

            con.query(sql, params, function (err, result) {
                if (err) {
                    console.log(err)
                    console.log(err.code)
                    console.log(err.fatal)
                } else {
                    console.log(result);
                    console.log("result.affectedRows-->", result.affectedRows);
                }
            })
        })
    })

}
// const user = {
//     name: "krinaaa",
//     email: "krishu@gmail.com",
//     password: "120",
//     sallary: 2200
// }
// insertData(user)

function updateData(user) {
    const sql = "UPDATE students SET name=?, email=?, password=?, sallary=? where id=10";
    const params = [user.name, user.email, user.password, user.sallary, user.id];

    con.connect(function (err) {

        con.query(sql, params, function (err, result) {
            if (err) {
                console.log(err)
                // console.log(err.code)
                // console.log(err.fatal)
            } else {
                // console.log(result);
                console.log("inserted data -->result.affectedRows-->", result.affectedRows);
            }
        })
    })
}
// const user = {
//     id : 10,
//     name : "krina Rajput",
//     email : "krishnarajput@gmail.com",
//     password : "12345",
//     sallary : 22200
// }
// updateData(user)

function deleteData(id) {
    const sql = "delete from students where id=?";

    con.connect(function (err) {

        con.query(sql, [id], function (err, result) {
            if (err) {
                console.log(err)
                // console.log(err.code)
                // console.log(err.fatal)
            } else {
                console.log(result);
                console.log("result.affectedRows-->", result.affectedRows);
            }
        })
    })
}
// deleteData( 10 )

function searchData(data) {
    var sql = "select * from students where 1=1";
    // const sql = 'SELECT * FROM students WHERE id LIKE ?';
    
    if (data != null) {
        sql = sql + " and id = ?";
    }
    con.connect((err) => {
        if (err) throw err;
        console.log('Connected to MySQL database');
      });
      
      // Perform a search query  
      con.query(sql, [data], (err, results, fields) => {
        if (err) throw err;
        console.log('Search results:', results);
      });
      
}

searchData("man")
