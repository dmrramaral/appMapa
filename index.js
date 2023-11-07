const express = require('express');



const app = express();
const login = require('./router/user.router');

const authUser = require('./router/login.router');

const mindMap = require('./router/mindMap.router');
/* importação do Service de autenticação */


const connectToDatabase = require('./database/database');
require('dotenv').config();

connectToDatabase();

const port = 3000;



app.use(express.json());

app.use('/user', login);

app.use('/mindMap', mindMap);

app.use('/auth', authUser);

app.get('/', (req, res) => {
    console.log(token());
    res.send("Hello World");
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


