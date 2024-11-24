const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const authRoutes = require("./routes/authRoutes")
const userRoutes = require("./routes/userRoutes")

dotenv.config()
const app = express()
app.use(express.json())

mongoose.connect(process.env.MONGO_URI , { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> console.log("connected to mongo"))
    .catch((err)=> console.error("mongodb connection error",err))

//routes
app.use("/auth",authRoutes)
app.use("/users",authenticateToken ,userRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})