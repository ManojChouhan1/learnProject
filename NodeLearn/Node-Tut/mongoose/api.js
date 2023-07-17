const express = require("express")
require("./config")
const proModel = require("./proModel.js")

const app = express();
app.use(express.json());// parse body
// create
app.post("/create",async (req, resp)=>{
    let data = new proModel(req.body)
    let result = await data.save()
    console.log(result)
    resp.send(result)
})
//listing
app.get("/list",async (req, resp)=>{
    let data = await proModel.find()
    resp.send(data)
})
// delete
app.delete("/delete/:_id",async (req, resp)=>{
    console.log(req.params)
    let data = await proModel.deleteOne(req.params)
    resp.send(data)
})

//put
app.put("/update/:_id",async (req, resp)=>{
    console.log(req.params)
    let data = await proModel.updateOne(req.params,{$set:  req.body})
    resp.send(data)
})

// search api
app.get("/search/:key", async (req,resp)=>{
    console.log(req.params.key);
    let data = await proModel.find(
        {
            "$or" : [
                { "name": {$regex : req.params.key}},
                {"brand" : {$regex : req.params.key}},
                {"category" : {$regex : req.params.key}}
            ]
        }
    )
    resp.send(data)
})
app.listen(8000)