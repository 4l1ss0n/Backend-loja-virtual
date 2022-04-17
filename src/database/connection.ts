import { DataSource } from 'typeorm';
import UsersModels from '../app/Models/UsersModels';

const {
    DB_HOST,
    DB_USERNAME,
    DB_DATABASE,
    DB_PASSWORD,
} = process.env;

const Connection = new DataSource({
    type: "postgres",
    host: DB_HOST,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    synchronize: true,
    logging: true,
    entities: [
        UsersModels
    ],
});


export default Connection.initialize()
    .then(() => {
        console.log("DATABASE ON");
    }).catch(err => {
        console.log(err);
    })