const mongoose = require('mongoose');

require('dotenv').config({patch: '../.env'});

const dbPassword = process.env.DB_PASSWORD;
const dbUser = process.env.DB_USER;


function connectToDatabase() {

mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.kppqoep.mongodb.net/users?retryWrites=true&w=majority`, {
        useNewUrlParser: true, useUnifiedTopology: true
    }).then(()=> {
        console.log("O Banco de dados conectou")

    }).catch((err)=>{

        
        return console.log(`Erro na conexão como o banco: ${err}` );
    })


}

module.exports = connectToDatabase