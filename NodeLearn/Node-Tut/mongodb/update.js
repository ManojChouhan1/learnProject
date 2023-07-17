const dbConnect = require("./dbConnects")

const update = async () => {
    const data = await dbConnect()
    const result = await data.updateMany(
        { name: "max-30"}, { $set: { name: "max-30",brand:"vivo", price: 12000 } }
    )
    if (result.acknowledged) {
        console.log(result)
    }
}
update();