import knex from "../services/connection";
import { getUsers } from './users';

describe('Testando a integração do jest com o BD', () => {


    beforeAll(async () => {

        await knex.raw(`drop table if exists usuarios;`)

        await knex.raw(`
            create table usuarios(
            id serial primary key,
            nome varchar not null,
            email varchar not null unique, 
            senha varchar not null);`
        )
    })



    it('teste de cadastro', async () => {
        const response = await knex('usuarios').insert({ nome: 'inserido agora', email: 'teste@teste', senha: 'teste senha' }).returning('*')
        expect(response).not.toBeUndefined();
    })


    afterAll(async () => {

        await knex.raw('drop table usuarios')

    })
})