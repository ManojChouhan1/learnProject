const http = require("http");

http.createServer(function(request,response){
    response.write("<p> Simple step by create server and html on browser</p>")
    response.end()
}).listen(4000)   // host port path --  127.0.0.1, 4000, /makeserver

/* Make a server by http.createServer and pass function as parameter  */

 function dataControl(request, response){
    response.write("<h1>It's make a basic server by http</h1>")
    response.end();
}
http.createServer(dataControl).listen(4500);

/* Make a server by http.createServer and pass function as Arrow function  */

http.createServer((req,res)=>{
    res.write("Show ny Arrow function")
    res.end()
}).listen(5000);



