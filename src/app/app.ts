import express from "express";
import cors from "cors";
import routes from "./Routes";
import dotenv from "dotenv";
import "reflect-metadata";
import {AppDataSource} from '../database/connection';

dotenv.config();
const app = express();

AppDataSource.initialize().then(() => {
    console.log("DB CONNECTED");
}).catch(err => {
    console.log({
        local: "app.ts",
        error: err 
    });
});

app.use(express.json());
app.use(cors());
app.use(routes);


export default app;
