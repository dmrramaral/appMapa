const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const authServices = require('../services/auth.services');
const User = require('../models/user.model');
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

module.exports = {
    login
}