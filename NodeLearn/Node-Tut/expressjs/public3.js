const express = require("express");
const path = require("path");
const publicPath = path.join(__dirname,"public");
const app = express();

app.set("view engine","ejs")

app.get("",(req,resp)=>{
    resp.sendFile(publicPath+"/index.html")
})

app.get('/login',(req,resp)=>{
    resp.render("login")
})

app.get("/profile",(req,resp)=>{
    const user={
        name : "manoj singh",
        email : "manoj@gmail.com",
        city : "Indore",
        skills: ['c++','java','script','python']
    }
    resp.render("profile",{user})
})
app.listen(5000);