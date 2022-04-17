import { config } from "dotenv";

config();

const {
    DB_TYPE,
    DB_HOST,
    DB_USERNAME,
    DB_DATABASE,
    DB_PASSWORD,
    SERVER_ENTENTIES_PATH
} = process.env;

export default {
    type: DB_TYPE,
    host: DB_HOST,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    entities: [
        SERVER_ENTENTIES_PATH 
    ]
};

// || "./src/app/models/**.ts"