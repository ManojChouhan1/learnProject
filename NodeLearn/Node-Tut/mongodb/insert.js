const dbConnect = require('./dbConnects')

const insert = async () => {
    let data = await dbConnect();
    let result = await data.insertMany([
        { name: "max-40", brand: "micromax", price: 1000, category: "mobile" },
        { name: "max-40", brand: "micromax", price: 1200, category: "mobile" },
        { name: "max-40", brand: "micromax", price: 1010, category: "mobile" }
    ])
    if (result.acknowledged) {
        console.log(result)
    }
}
insert();