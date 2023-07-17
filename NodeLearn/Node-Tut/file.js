// const fs = require('fs');
// fs.writeFileSync("file.txt", "this text in file.txt made by fs module import");


// const fs = require('fs').writeFileSync;
// fs("file.txt2", "only used purpose module import hence load is low");


// console.log(" /*  How to check directory in project ==>  __dirname */ ");
// console.log("==>", __dirname);


// console.log(" /*  How to check directory in project ==>  __filename  */ ");
// console.log("==>", __filename);

/* import local modules  hence import index.js file */

const index = require("./index.js");
console.log("file-- ", index)
console.log("file--x y- ", index.x+" "+index.y)
console.log("file-- func()- ", index.func())

