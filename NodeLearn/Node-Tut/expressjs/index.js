const express = require('express');
const app = express();

app.get('',(req,resp)=>{
    resp.send('Welcome this is Home page')
    console.log(req.query.name)
    

})
// app.get("/about",(req,resp)=>{
//     resp.send("Welcome this is About page")
// })
// app.get("/contact",(req,resp)=>{
//     resp.send("Welcome this is contact page")

//     console.log(req.query.name)
// })
app.listen(5000)