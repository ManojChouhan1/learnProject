const dbConnect = require("./dbConnects")
//other
//    dbConnect().then((res)=>{
//     res.find().toArray().then((result)=>{
//         console.log(result)
//     })
//    })

async function main() {
    let data = await dbConnect();
    data = await data.find({}).toArray();
    console.log(data)
}
main()