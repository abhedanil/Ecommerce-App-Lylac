const express = require("express")
const app=express()
const cors= require('cors')
const dbConnect= require("./config/dbConnect")
const dotenv= require('dotenv').config()
const PORT =process.env.PORT|| 4000
const authRouter = require("./routes/authRoutes")
const productRouter = require("./routes/ProductRouter");
const bodyParser= require("body-parser")
const { notFound, errorHandler } = require("./middlewares/errorHandler")
dbConnect()
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use("/api/user",authRouter)
app.use("/api/product", productRouter);

app.listen(PORT,()=>{
    console.log(`server is starting at ${PORT}`);
})  
