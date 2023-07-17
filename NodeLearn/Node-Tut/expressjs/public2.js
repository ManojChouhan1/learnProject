/**  Remove extantion from url 
 *  Apply grt method
 * make 404 page and apply  */

const express = require("express");
const path = require("path");

const publicPath = path.join(__dirname,"public");
console.log(publicPath);

const app = express();
app.get('',(req,resp)=>{
    resp.sendFile(publicPath+"/index.html")
})
app.get('/home',(req,resp)=>{
    resp.sendFile(publicPath+"/home.html")
})
app.get('/about',(req,resp)=>{
    resp.sendFile(publicPath+"/about.html")
})
app.get('/contact',(req,resp)=>{
    resp.sendFile(publicPath+"/contact.html")
})
app.get('*',(req,resp)=>{
    resp.sendFile(publicPath+"/notfoundpage.html")
})
app.listen(5000)