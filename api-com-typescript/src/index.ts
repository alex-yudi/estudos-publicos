require('dotenv').config();

import express from 'express';

import { login } from './controllers/login';


const app = express();

app.use(express.json())


app.post('/login', login)


app.listen(process.env.PORT);
