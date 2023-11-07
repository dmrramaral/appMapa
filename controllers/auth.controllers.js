
const authServices = require('../services/auth.services');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const secret = process.env.SECRET;


const login = async (req, res) => {

    try {
        const { email, password } = req.body;
        const user = await authServices.loginService(email);

        if (!user) {
            return res.status(400).send({ error: 'Usuário ou senha inválida, tente novamente' });
        }

        if (password != user.password) {
            return res.status(400).send({ error: 'Usuário ou senha inválida, tente novamente' });
        }

        const tokenAcess = authServices.generateToken(user.id, secret);

        res.status(200).send({ user, tokenAcess });

    } catch (error) {
        res.status(500).send({ error: 'Erro ao realizar o login' });
        console.log(error);
        
    }
}

const autorization = async (req, res) => {
    const authHeader = req.headers.authorization;

    try{
        if (!authHeader) {
            return res.status(401).send({ error: 'Não autorizado' });
        }

        const parts = authHeader.split(' ');

        if (parts.length !== 2) {
            return res.status(401).send({ error: 'Token não possui 2 partes' });
        }
        const [scheme, token] = parts;

        if (!/^Bearer$/i.test(scheme)) {
            return res.status(401).send({ error: 'token Mal formatado!' });
        }

        jwt.verify(token, secret, async (err, decoded) => {
            console.log(decoded);
            if (err) {
                return res.status(401).send({ error: 'Não autorizado' });
            }

            req.userId = decoded.id;
            return res.status(200).send({ message: 'Autorizado' });
        });

        console.log(scheme);
        console.log(token); 
    }catch(error){
        res.status(500).send({ error: 'Erro ao realizar a autorização' });
        console.log(error);
    }
}

module.exports = {
    login,
    autorization
}