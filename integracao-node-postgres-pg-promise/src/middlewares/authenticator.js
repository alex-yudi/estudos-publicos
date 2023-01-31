const database = require('../database/database')

const verifyPassword = async (req, res, next) => {
    // SENHA CORRETA:
    const queryPassword = await database.query('SELECT senha FROM acesso;');
    const password = queryPassword[0].senha;

    const { senha } = req.query;

    console.log(password, "senha do bd");
    console.log(senha, "senha query")

    if (!senha) {
        return res.status(400).json({ mensagem: "Necessário fornecer a senha de acesso!" });
    }

    if (senha !== password) {
        return res.status(400).json({ mensagem: "Senha incorreta." })
    }

    return next();
}

module.exports = verifyPassword;