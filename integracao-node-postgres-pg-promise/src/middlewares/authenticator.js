const verifyPassword = (req, res, next) => {
    // SENHA CORRETA:
    const password = 'acessoLiberado';

    const { senha } = req.query

    if (!senha) {
        return res.status(400).json({ mensagem: "Necessário fornecer a senha de acesso!" });
    }

    if (senha !== password) {
        return res.status(400).json({ mensagem: "Senha incorreta." })
    }

    return next();
}

module.exports = verifyPassword;