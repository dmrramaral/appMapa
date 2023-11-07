const express = require('express');
const app = express();
const login = require('./router/user.router');

const mindMap = require('./router/mindMap.router');
/* importação do Service de autenticação */
const authServices = require('./services/auth.services');

const connectToDatabase = require('./database/database');
require('dotenv').config();

connectToDatabase();

const port = 3000;


app.use(express.json());

app.use('/user', login);

app.use('/mindMap', mindMap);

app.get('/', (req, res) => {
    console.log(token());
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

    user.token = token();

    await authServices.updateTokenService(user);

    res.status(200).send(user);

   } catch (error) {

    res.status(500).send({ error: 'Erro ao realizar o login' });
    console.log(error);
    
   }


});

/* Geração de Token */
const token = () => {
    const token = Math.random().toString(36).substring(2);
    return token;
}

/* Não vou inserir a validação de token no momendo pois tive um pouco de dificuldade de entender como seria exatamente a utilização dele, mas vou deixar que gere sempre um token 
no usuário toda vez que ele fizer o login pra quem sabe posteriormente utilizar esse token */

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


