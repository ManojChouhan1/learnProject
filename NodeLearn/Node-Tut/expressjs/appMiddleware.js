const express = require('express');
const app = express();
const route = express.Router();  // route level middleware

const reqFilter = require("./DiffFileRouteMiddleware")

 /* Application middle ware Middle ware */
// const reqFilter = (req, resp, next) => {
//     if (!req.query.age) {
//         resp.send("Please provide age")
//     } else if (req.query.age < 18) {
//         resp.send("You can't acess side")
//     } else {
//         next()
//     }
// }
// app.use(reqFilter)
route.use(reqFilter);



app.get('', (req, resp) => {
    resp.send("<h1>Welcome to home page</h1>")
})

// app.get('/user',reqFilter, (req, resp) => {        // Route middleware apply on single
//     resp.send("<h1>Welcome to User page</h1>")     // Route middleware apply on group
// })

route.get('/about', (req, resp) => {
    resp.send("<h1>Welcom to About page</h1>")
})

route.get('/contact', (req, resp) => {
    resp.send("<h1>Welcome to Contact page</h1>")
})

app.get('*',route)

app.listen(5000)