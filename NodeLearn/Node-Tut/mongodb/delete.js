const dbConnect = require("./dbConnects")

const detete = async ()=>{
    const data = await dbConnect();
    const result = await data.deleteMany(
        {name:"max-40"}
    )
    if(result.acknowledged){
        console.log(result)
    }
}
detete()