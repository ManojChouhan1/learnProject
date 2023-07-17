var express = require('express');

var app = express();
app.use(express.static('public'));
//Url mapping 
app.get('/', function (req, res) {
    res.send('<h1>Welcome</h1>');
});
app.get('/login', function (req, res) {
    res.send('Login get');
});
app.post('/login', function (req, res) {
    res.send('Login Post');
});
app.listen(8000, () => {
    console.log('Node server is running..', 8000);
});
