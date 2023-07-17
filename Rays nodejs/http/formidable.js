var http = require('http');
var path = require('path');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
    if (req.url == '/urlupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldpath = files.filetoupload.filepath;
            var pathF = path.join(__dirname, "uploads")
            var newpath = pathF + "/" + files.filetoupload.originalFilename;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write('File successfully uploaded by self created folder "uploads" in your current directry!');
                res.end();
            });
        });
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
        <form action="urlupload" method="post" enctype="multipart/form-data">
        <input type="file" name="filetoupload" /> <br/>
        <input type="submit" />
        </form>
            `)
        return res.end();
    }
}).listen(5000);