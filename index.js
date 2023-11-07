const express = require('express');
const app = express();
const login = require('./router/user.router');
/* importação do Service de autenticação */
const authServices = require('./services/auth.services');

const connectToDatabase = require('./database/database');
require('dotenv').config();

connectToDatabase();

const port = 3000;


app.use(express.json());

app.use('/user', login);

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.post('/login', async (req, res) => {
   try {
    const { email, password } = req.body;
    const user = await authServices.loginService(email);

    if (!user) {
        return res.status(400).send({ error: 'Usuário ou senha inválida, tente novamente' });
    }

    if (password != user.password) {
        return res.status(400).send({ error: 'Usuário ou senha inválida, tente novamente' });
    }

    res.send(user);

   } catch (error) {

    res.status(500).send({ error: 'Erro ao realizar o login' });
    console.log(error);
    
   }


});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


