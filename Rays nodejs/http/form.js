// const express = require('express');
// const multer = require('multer');
// const app = express();

// const upload = multer({ dest: 'uploads' });

// app.post('/upload', (req, res) => {
//   console.log(req.file);
//   res.send('File uploaded successfully!');
// });

// app.listen(3000, () => {
//   console.log('Server started on port 3000');
// });


const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/upload' && req.method === 'POST') {
    // Handle file upload
    const chunks = [];
    let totalSize = 0;
    req.on('data', (chunk) => {
      chunks.push(chunk);
      totalSize += chunk.length;
    });
    req.on('end', () => {
      const buffer = Buffer.concat(chunks, totalSize);
      fs.writeFile('uploaded-file.jpg', buffer, (err) => {
        if (err) {
          console.error(err);
          res.statusCode = 500;
          res.end('Error while uploading file');
        } else {
          res.end('File uploaded successfully');
        }
      });
    });
  } else {
    // Serve HTML form
    res.setHeader('Content-Type', 'text/html');
    res.end(`
      <form method="POST" action="/upload" enctype="multipart/form-data">
        <input type="file" name="file">
        <input type="submit" value="Upload">
      </form>
    `);
  }
});

server.listen(3000, () => {
  console.log('Server started on port 3000');
});
