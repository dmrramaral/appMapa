const mongoose = require('mongoose');

function connectToDatabase() {

    mongoose.connect("mongodb+srv://dmrramaral:<password>@cluster0.kppqoep.mongodb.net/users?retryWrites=true&w=majority", {
        useNewUrlParser: true, useUnifiedTopology: true
    }).then(()=> {
        console.log("O Banco de dados conectou")

    }).catch((err)=>{
        
        return console.log(`Erro na conexão como o banco: ${err}`);
    })


}

module.exports = connectToDatabase