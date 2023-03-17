import { Request, Response } from "express"
import knex from "../services/connection"

const getUsers = async (req: Request, res: Response) => {

    try {
        const response = await knex('usuarios')

        return res.json(response);
    } catch (error) {
        return res.json(error)
    }
}

export { getUsers };