const http = require('http');
let data = [
    { name: 'manoj', email: 'manoj@gmail.com', age: '27' },
    { name: 'jeevan', email: 'jeevan@gmail.com', age: '28' },
    { name: 'shubham', email: 'shubham@gmail.com', age: '25' }
]


http.createServer((req, resp) => {
    resp.writeHead(200, { 'content-type': 'application/json' })
    resp.write(JSON.stringify(data))
    resp.end();
}).listen(5000)