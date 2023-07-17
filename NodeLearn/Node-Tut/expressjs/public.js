const express = require("express");
const path = require('path');
const app = express();

const PublicPath = path.join(__dirname,"public");
console.log(PublicPath);

app.use(express.static(PublicPath));

app.listen(5000)