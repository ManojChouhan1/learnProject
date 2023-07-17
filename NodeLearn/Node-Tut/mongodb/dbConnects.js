const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://localhost:27017');

async function dbConnect() {
    await client.connect()
    let db = client.db("e-comm")

    return db.collection("products")
}

module.exports = dbConnect;
