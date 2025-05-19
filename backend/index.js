import express from 'express';
import {connectDB} from "./src/db/index.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config({
    path: "./.env" // Ensure this path matches the location of your .env file
});


connectDB();



app.listen(process.env.PORT || 8000,(req,res)=>{
    console.log("server is running")
})