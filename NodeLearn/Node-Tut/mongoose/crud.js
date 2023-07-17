// connection mongoose with  node js
const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/mongoose-e-comm")

// product schema 
const proSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String
});

 // product model
const proMOdel = mongoose.model("mongoose-products", proSchema);

// insert data
const saveInDb = async () => {
    let data = new proMOdel({
        name: "MI",
        price: 2500,
        brand: "xiomi",
        category: "mobile"
    });
    const result = await data.save()
    console.log(result)
}
// saveInDb()

// update data
const updateInDb = async () => {
    let data = await proModel.updateOne({ name: "Node-pro" }, { $set: { name: "Node-pro", price: 2000 } })
    console.log(data)
}
// updateInDb()

const findInDb = async () => {
    let data = await proModel.find({ name: "Node-pro" })
    console.log(data)
}
// findInDb()

const deleteInDb = async () => {
    let data = await proModel.deleteOne({ name: "Node-pro" })
    console.log(data)
}
// deleteInDb()