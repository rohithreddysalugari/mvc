
let express=require("express")
let app=express()
let sql=require("mysql")
let router=require("./routes/routes")

app.use(express.json())

app.use("/user",router)

let con=sql.createConnection({
    host:"localhost",
    user:"root",
    password:"mani@2805",
})

con.connect(()=>{
    console.log("connect database success")
})

module.exports=con