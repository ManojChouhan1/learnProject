// Express  — Node.js Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
// body-parser — Node.js request body parsing middleware which parses the incoming request body before your handlers, and make it available under req.body property. In other words, it simplifies the incoming request.
// cors — It’s an Express middleware for enabling Cross-Origin Resource Sharing requests. Just because of it, We can access the API in different applications.
// multer — Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of busboy for maximum efficiency.
// MySQL — MySQL an open-source relational database management system (RDBMS).

// Query mysql

// CREATE DATABASE my-node;

// CREATE TABLE files (
//   id int(11) NOT NULL,
//   name varchar(255) NOT NULL
// ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

// var mysql = require('mysql2');
// var conn = mysql.createConnection({
//     host: 'localhost', // Replace with your host name
//     port : 3306,
//     user: 'root',      // Replace with your database username
//     password: 'root',      // Replace with your database password
//     database: 'nodejs' // // Replace with your database Name
//   }); 
//   conn.connect(function(err) {
//     if (err) throw err;
//     console.log('Database is connected successfully !');
//   });
//   module.exports = conn;


var express = require('express');
var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');
var multer = require('multer')
const con = require('./config')
var app = express();
// var port = process.env.PORT || 3000;

// enable CORS
app.use(cors());
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// serving static files
app.use('/uploads', express.static('uploads'));

// request handlers
app.get('/', (req, res) => {
    res.send('Node js file upload rest apis');
});
// handle storage using multer
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
});

var upload = multer({ storage: storage });

// handle single file upload
app.post('/upload-avatar', upload.single('dataFile'), (req, res, next) => {
    const file = req.file;
    if (!file) {
        return res.status(400).send({ message: 'Please upload a file.' });
    }
    var sql = "INSERT INTO students(name) VALUES ('" + req.file.filename + "')";
       con.query(sql, function (err, result) {
        return res.send({ message: 'File is successfully.', file });
    });
});

app.listen(5000, () => {
    console.log('Server started on: ' + 5000);
});