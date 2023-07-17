// Node js get API
const express = require("express")
const dbConnect = require('./dbConnects')
const mongodb = require('mongodb')

const app = express();
app.use(express.json());   // req se body--> ? = body.parsel -4.6 of node version
// get() api method
app.get('/', async (req, resp) => {
    let data = await dbConnect();
    data = await data.find().toArray()
    resp.send(data)
})
// post() api method
app.post("/", async (req, resp) => {
    let data = await dbConnect();
    let result = await data.insertOne(req.body)
    resp.send(result);
})
// puT() api method
app.put("/:name", async (req, resp) => {
    let data = await dbConnect();
    let result = await data.updateOne(
        { name: req.params.name },
        { $set: req.body }
    )
    resp.send({ result })
})
// delete() api
app.delete("/:id", async (req, resp) => {
    console.log(req.params.id)
    let data = await dbConnect()
    let result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    resp.send(result)
})
app.listen(5000);