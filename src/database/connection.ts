import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import Users from '../app/Models/UsersModels';

config();
const {
    DB_HOST,
    DB_USERNAME,
    DB_DATABASE,
    DB_PASSWORD,
} = process.env;

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    synchronize: true,
    logging: false,
    entities: [
        Users
    ],
});