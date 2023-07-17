const con = require("./config");

function seachData(data) {
    let sql = 'SELECT * FROM students WHERE 1=1 AND id LIKE ? OR name LIKE ? OR email LIKE ?';

    if (data == null) {
        sql = 'SELECT * FROM students WHERE 1=1 or id LIKE ? OR name LIKE ? OR email LIKE ?';
    }

    // con.connect((err) => {
    //     if (err) throw err;
    //     console.log('Connected to MySQL database');
    // });

    // Perform a search query on multiple fields
    con.query(sql, [data, data, data], (err, results, fields) => {
        if (err) throw err;
        console.log('Search results:', results);
    });

    // Close the database connection
    // con.end((err) => {
    //   if (err) throw err;
    //   console.log('Disconnected from MySQL database');
    // });

}
seachData()