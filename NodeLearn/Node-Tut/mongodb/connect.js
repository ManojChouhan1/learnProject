// data base (mongodb) connect to the node js

const { MongoClient } = require('mongodb')
const client = new MongoClient('mongodb://localhost:27017');

async function getDAta()
{
    await client.connect();
    let db = client.db("e-comm");                    //e-comm --> is a data base name

    // collection connect
    let collection = db.collection("products");       //products --> is a collection name
    let result = await collection.find({}).toArray()  // Read the collection

    console.log(result)
}


getDAta()