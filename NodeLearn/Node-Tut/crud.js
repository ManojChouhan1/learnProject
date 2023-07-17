/* Create fie
 * Read file
 * Updatee file
 * Delete */
const fs = require('fs');
const path =  require('path');

const dirPath = path.join(__dirname,"crud")   /* current directry me crud folder ka path dega */
const filepath = `${dirPath}/apple.txt`;

console.log("==>   ", dirPath)
/*  Create file  */

// fs.writeFileSync(filepath, "this is simple text file perform CRUD operation");  /* crud folder me apple.txt file bni*/

/* Read file ( 'utf8'  buffer error avoid karta hai) */

// fs.readFile(filepath, "utf8", (err,item)=>{
//     console.log("error", err)
//     console.log("Read item :-", item)
// })

/* Update file */

// fs.appendFile(filepath, " (Update) And file name is apple.txt", (err)=>{
//     if(!err){ console.log("fil update successfully")}
// })

/* Rename file   it's not crud operation */

// fs.rename(filepath, `${dirPath}/fruits.txt`, (err)=>{
//     if(!err){ console.log("File is renammed")}
// })

/* Delete operation */


fs.unlinkSync(`${dirPath}/fruits.txt`)
fs.unlinkSync(filepath)