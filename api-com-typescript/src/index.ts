require('dotenv').config();

import express from 'express';

import { login } from './controllers/login';
import { getUsers } from './controllers/users';


const app = express();

app.use(express.json())

app.get('/', getUsers)

app.post('/login', login)


app.listen(process.env.PORT);
