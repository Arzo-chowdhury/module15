import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import { REQUEST_TIME } from"./src/configs/config.js";



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

})
