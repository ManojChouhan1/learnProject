const express = require('express');
const multer = require('multer');

const app = express();

const upload = multer({
     storage : multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads'); //uploads is a folder where upload image file;  cd is a callback function
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname+"_"+Date.now()+".jpg")
        }
    })

}).single("user_file");  //user_file is a key name

app.post('/upload', upload,  (req, res) => {
    res.send('File uploaded successfully');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
