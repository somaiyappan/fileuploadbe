import express from "express"
import mongoose from "mongoose"
import morgan from "morgan";
import router from "./router.js"
import cors from "cors"

const app=express();
const port=3007

app.use(cors())

mongoose.connect("mongodb://localhost:27017/fileUpload",(err)=>
{
    if(!err)
    {
        console.log("DB Connected");
    }
    else
{
    console.log("DB Not Connected");
}
})

app.listen(port,()=>
{
    console.log("Backed Running");
})

app.use("/api",router)
app.use(morgan("dev"))
