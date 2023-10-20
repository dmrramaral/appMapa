const express = require('express');
const app = express();
const login = require('./router/login.router');

const port = 3000;


app.use(express.json());

app.use('/login', login);

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});


