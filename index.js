import express, { Router } from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { REQUEST_TIME, WEB_CACHE } from"./src/configs/config.js";



const app = express();

//App use default middleware
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(cookieParser());


//Rate limiter middleware
const limiter = rateLimit({
    windowMs: REQUEST_TIME,
    max: 100,
    message: "Too many requests from this IP, please try again later.",

});
app.use(limiter);

//cache
app.set("etge",WEB_CACHE);


//API ROUTES
app.use("/api/v1", router )

app.listen(PORT,( )=>{
    console.log("Server is running on port", PORT)
})

