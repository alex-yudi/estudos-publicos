import dotenv from 'dotenv';
dotenv.config();

const dbData = {
    host: process.env.BD_HOST,
    user: process.env.BD_USER,
    password: process.env.BD_PASS,
    database: process.env.BD_DATABASE
}

if (process.env.NODE_ENV === 'test') {
    dbData.host = process.env.BD_TEST_HOST;
    dbData.user = process.env.BD_TEST_USER;
    dbData.password = process.env.BD_TEST_PASS;
    dbData.database = process.env.BD_TEST_DATABASE;
}



const knex = require('knex')({
    client: 'pg',
    connection: { ...dbData }
})

export default knex;