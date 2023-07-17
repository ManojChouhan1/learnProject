const con = require("./config")

const readData = () => {
    const sql = "select * from students";
    con.query(sql,(err, result)=>{
        if(err){
            console.log(err)
        }else{
            console.log(result)
        }
    })
}
// readData();

const insertData =()=>{
    const sql = "insert into students values(5,'Aman','aman@gmail.com','2152',1000)";
    con.query(sql,(err,result)=>{
        if(err) console.log("Error")
        console.log(result)
    })
}
// insertData();
const updateData=()=>{
    const sql = "update students set name='Man',password='123456',sallary=11101 where id=6";
    con.query(sql, (err,result)=>{
        if(err) console.log(err)
        console.log(result)
    })
}
// updateData();
const deleteData = () =>{
    const sql = "DELETE FROM students where id=5";
con.query(sql, (err,result)=>{
    if(err) throw "Error"
    console.log(result);
})
}
// deleteData();