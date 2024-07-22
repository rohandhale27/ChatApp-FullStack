import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.route.js"
import messageRoute from "./routes/message.route.js"
import cors from "cors";
import path from "path"
import cookieParser from "cookie-parser";
import { app, server } from "./SocketIO/server.js";
dotenv.config();

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

const PORT=process.env.PORT || 3001;
const URI=process.env.MONGODB_URI;

try {
    mongoose.connect(URI);
    console.log("Connected to MongoDB");
} catch (error) {
    console.log(error)
}

//route
app.use("/api/users",userRoute);
app.use("/api/message",messageRoute);

//--------------code for deployment-----------------
if(process.env.NODE_ENV==="production")
{
    const dirPath=path.resolve();
    app.use(express.static("./Frontend/dist"));
    app.get("*",(req,res)=>{
           res.sendFile(path.resolve(dirPath,"./Frontend/dist","index.html"))
    })
}

server.listen(PORT,()=>{
    console.log(`Server running on the port ${PORT}`);
});
