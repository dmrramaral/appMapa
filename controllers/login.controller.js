const User = require("../models/user.model")

// Função para criar um novo usuário
const create = async (req, res) => {
    const user = req.body;  
    return res.status(201).send(await User.create(user));
}

// Função para atualizar um usuário existente
const update = async  (req, res) => {
    const id = req.params.id;
    const user = req.body;


  
    return res.status(200).send( await User.findByIdAndUpdate(id, user, {returnDocument: "after"}));


   
}

// Função para excluir um usuário
const deleted =  async (req, res) => {
    const id = req.params.id;

    return res.status(200).send(await User.findByIdAndDelete(id));
}

// Função para encontrar todos os usuários
const findAll = async (req, res) =>  {
    return res.send(await User.find());
    
}

// Função para encontrar um usuário por ID
const findById = async (req, res) => {
    const id = req.params.id;
    /* o status 200 é o padrão caso não seja definido */
    return res.status(200).send(await User.findById(id));
}

// Exporta as funções para serem usadas em outro lugar
module.exports = {
    findById,
    findAll,
    create,
    update,
    deleted
};
