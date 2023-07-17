const http = require("http")
const url = require("url")


http.createServer((req, resp) => {
    resp.write("I am manoj singh chouhan")

    // resp.write("URL: " + req.url );
    // resp.write("Method:" + req.method );
    // resp.write("HttpV" + req.httpVersion + "<br>");
    // resp.write("Host:" + req.headers["host"]);
    // Display headers and their values
    // resp.write('<H1>Header Information</H1>');

    // for (var key in req.headers) {
    //     var value = req.headers[key];
    //     resp.write(key + " : " + value + " <br>");
    // }

    var params = url.parse(req.url, true).query;
    resp.write(params.name);
    // res.write(params.city);

    resp.end();
}).listen(8000);



