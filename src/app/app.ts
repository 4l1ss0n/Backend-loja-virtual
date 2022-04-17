import express from "express";
import cors from "cors";
import routes from "./Routes";
import dotenv from "dotenv";
import "reflect-metadata";
import Connection from '../database/connection';

dotenv.config();
const app = express();

Connection;

app.use(express.json());
app.use(cors());
app.use(routes);


export default app;
