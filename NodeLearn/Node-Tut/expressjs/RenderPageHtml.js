const express =require("express");
const app = express();
/*  Html code */
app.get('',(req,resp)=>{
    resp.send("<h1>This is Home page</h1> <a href='/about' >go to About page</a>")
    console.log(req.query.name)
});
/*  input and button  */
app.get('/about',(req,resp)=>{
    resp.send(`
    <input type="text" placeholder="user name" value="${req.query.name}"/>
    <button>click me</button>
    <a href='/contact' >go to contact page</a>
    `)
});

/*  Json tag  */

app.get('/contact',(req,resp)=>{
    resp.send(`[
        {
            name : "manoj",
            email : 'manoj@gmail.com'
            age : 27,
        },
        {
            name : "jivan",
            email : 'jivan@gmail.com'
            age : 28,
        }
    ]
    <a href='/' >go to Home page</a>`)
});

app.listen(5000);