import { Request, Response } from 'express';

import transporter from '../emailSender'

const user = {
    email: 'yudi.toma@gmail.com',
    senha: '123456'
}

export const login = async (req: Request, res: Response) => {
    const { email, senha } = req.body;

    if (user.email !== email) {
        return res.status(400).json({ mensagem: "Email ou senha inválidos!" })
    }
    if (user.senha !== senha) {
        return res.status(400).json({ mensagem: "Email ou senha inválidos!" })
    }


    transporter.sendMail({
        from: `${process.env.EMAIL_NAME} <${process.env.EMAIL_FROM}>`, // remetente
        to: user.email,  // destinatário
        subject: "Verificação de integração", // assunto do email
        text: "Integrando API ", // texto do email
    })

    return res.json({ mensagem: "Login efetuado com sucesso!" })
}

