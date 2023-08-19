import express from "express";
import * as dotnev from 'dotenv';
import cors from 'cors';
import connectDB from "./Mongodb/connect.js";

dotnev.config();

const app = express();
app.use(cors());
app.use(express.json({limit:"50mb"}))


app.get('/',async (req,res)=>
{
 res.send("Hello, Welcome to Dall - E")
})

const startServer = async ()=>
{
    
        try 
        {   connectDB(process.env.MONGODB_URL)
            app.listen(8080,()=>
            {
                console.log("server started at port http://localhost:8080/")
            })
        }
        catch(error)
        {
            console.log(error)
        }

}

startServer();