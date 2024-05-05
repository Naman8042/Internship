const express = require("express")
const app = express()

app.use(express.json())

require("dotenv").config()
const PORT = process.env.PORT; 

const Routes = require("./routes/Routes")
app.use("/api/v1", Routes)

app.listen(PORT,()=>{
    console.log("server started")
})
const dbconnect = require("./config/Dbconnect")
dbconnect()