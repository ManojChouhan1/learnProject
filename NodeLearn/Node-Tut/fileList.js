/*  make folder is    File  */

const fs= require('fs');
const path = require("path");

// console.log(__dirname)

const dirPath = path.join(__dirname,'file');

console.log(dirPath)

/* make file in folder */

// fs.writeFileSync(dirPath+"/apple.txt" ,"this is simple text")

for(let i= 1; i<=5; i++){
    // fs.writeFileSync(dirPath+"/hello"+i+".txt", "Make simple file in folder")
    // fs.writeFileSync(`${dirPath}/hello${i}.txt`, `Make simple file in folder`)

    // fs.unlinkSync(dirPath+"/hello"+i+".txt", "Make simple file in folder")
    fs.unlinkSync(`${dirPath}/hello${i}.txt`)
}