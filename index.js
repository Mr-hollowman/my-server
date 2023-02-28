const express  = require("express")
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require("./mongoDb/connect")
// const bodyParser = require("body-parser")
dotenv.config()
const userRouter = require("./mongoDb/routes/user.routes")
const app = express()
// app.use(bodyParser.json());

app.use(cors())
app.use(express.json());
// app.use(express.urlencoded({ extended: true} ));


app.get("/hi",(req,res)=>{
    res.send({message:"hello"})
})

app.use('/api/v1/users', userRouter)

const startServer = ()=>{
    connectDB(process.env.MONGO_URL)
    app.listen(8080,()=>console.log("your app is running on `${http://localhost:8080}`"))
}

startServer()