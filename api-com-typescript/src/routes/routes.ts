require('dotenv').config();

import express from 'express';

import { login } from '../controllers/login';
import { getUsers } from '../controllers/users';


const routes = express();

routes.use(express.json())

routes.get('/', getUsers)

routes.post('/login', login)


export default routes;