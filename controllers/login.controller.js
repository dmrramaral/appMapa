const User = require("../models/user.model")

// Função para criar um novo usuário
const create = (req, res) => {
    const user = req.body;
    users.push(user);
    res.send(user);
}

// Função para atualizar um usuário existente
const update = (req, res) => {
    const id = req.params.id;

    users.map(function(valor, index){
        if(valor.id == id){
            users[index] = req.body;
            res.send(users[index]);
        }
    });

    if(!users){
        res.send("Usuário não encontrado");
    }
}

// Função para excluir um usuário
const deleted = (req, res) => {
    const id = req.params.id;

    users.map(function(valor, index){
        if(valor.id == id){
            users.splice(index, 1);
            res.send(users);
        }
    });

    if(!users){
        res.send("Usuário não encontrado");
    }
}

// Função para encontrar todos os usuários
const findAll = (req, res) => {
    return res.send(User.find());
    
}

// Função para encontrar um usuário por ID
const findById = (req, res) => {
    const id = req.params.id;
    const user = users.find(user => user.id == id);
    res.send(user);
}

// Exporta as funções para serem usadas em outro lugar
module.exports = {
    findById,
    findAll,
    create,
    update,
    deleted
};
