import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";



const app = express();

//App use default middleware
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(cookieParser());


//Rate limitter middleware
const limitter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Too many requests from this IP, please try again later.",

})
