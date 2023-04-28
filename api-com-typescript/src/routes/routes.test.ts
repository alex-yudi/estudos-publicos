import knex from "../services/connection";
import request from 'supertest'
import app from '../app';

describe('teste de api', () => {

    beforeAll(async () => { // Criando acesso para BD de testes

        await knex.raw(`drop table if exists usuarios;`)

        await knex.raw(`
            create table usuarios(
            id serial primary key,
            nome varchar not null,
            email varchar not null unique, 
            senha varchar not null);`
        )
    })

    it('testa listagem dos usuários', async () => {
        const response = await request(app).get('/');

        expect(response.body).toBeTruthy();
    })


    afterAll(async () => {

        await knex.raw('drop table usuarios')

    })
})