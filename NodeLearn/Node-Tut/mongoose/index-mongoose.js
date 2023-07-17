const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/mongoose-e-comm')  // connemction with mongo to node

const proSchema = new mongoose.Schema({   //Schema validation
    name: String,
    price: Number
});

const proModel = mongoose.model('mongoo-products', proSchema)  //("collection name", Schema name)-->model

const main = async () => {
    let data = new proModel({
        name: 'moto1',
        price: 2000,
        model: "g-20",
        category: "mobile"
    })

    let result = await data.save()

    console.log(result)
}

main()