import express from 'express';
import { connectDB } from "./src/db/index.js";
import userRoute from "./src/routes/user.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:5173",

    credentials:true
}))

connectDB();

app.use("/api/v1/user", userRoute);

app.get("/home", (_, res) => {
    res.status(200).json({
        success: true,
        message: "Hello I am coming from the backend"
    });
});

app.listen(process.env.PORT || 8000, () => {
    console.log("server is running");
});
