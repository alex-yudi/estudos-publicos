const express = require('express');
const app = express();

const database = require('./database/database');

app.use(express.json());

// Autenticando password para acesso ao sistema.
const verifyPassword = require('./middlewares/authenticator');
app.use(verifyPassword)



app.get('/', async (req, res) => {
    const users = await database.query('SELECT * FROM usuarios');

    return res.json(users)
})


app.post('/saldo/adicionar/:id', async (req, res) => {
    const { id } = req.params;
    const { saldo } = req.body;

    await adicionarSaldo(id, saldo);

    const account = await searchAccountByIndex(id);


    console.log(account);

    res.send('ok')
})


const searchAccountByIndex = (index) => {
    return database.query(`SELECT * FROM usuarios WHERE id = ${index}`)
}

const adicionarSaldo = async (index, saldo) => {
    const user = await searchAccountByIndex(index);
    return database
        .query(`UPDATE usuarios SET saldo=${user.saldo += saldo} WHERE id= ${index}`);
}

app.listen(3000);