const MongoClint = require("mongodb").MongoClient

const employeeData=require("./data.json")
const Connection = 'mongodb://127.0.0.1:27017'
MongoClint.connect(Connection,async(err, db)=>{
    if (err)
    {console.log("error while connecting",err)
    return
    }
    const database=db.db("Human_Resource")
    const data=database.collection('employee')
    console.log("connected to mongo data base");
    const insert = await database.collection("employee").insertMany(employeeData)
    console.log(insert)
    const finding = await data.find().toArray()
    console.log(finding);
    const salaryFind= await data.find({salary:{$gt:"30000"}}).toArray()
    console.log(salaryFind)
})