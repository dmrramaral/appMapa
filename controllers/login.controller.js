const User = require('../models/user.model');
const mongoose = require('mongoose');

// Função para criar um novo usuário
const create = async (req, res) => {
    /* Inseri o async para poder inserir o await dentro do metodo para esperar ele aguarde até que seja resolvido e retornar o valor do Metodo */
    const user = req.body;

    if (!user.name || !user.email || !user.password) {
        return res.status(400).send({ error: 'Dados incompletos' });
    }

    if (user.password.length < 6) {
        return res.status(400).send({ error: 'A senha deve ter no mínimo 6 caracteres' });
    }

    try {
        const createdUser = await User.create(user);
        return res.status(201).send(createdUser);
    } catch (error) {
        return res.status(500).send({ error: 'Erro ao criar usuário' });
    }
};

// Função para atualizar um usuário existente
const update = async (req, res) => {
    const id = req.params.id;
    const user = req.body;

    try {
        const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });
        if (!updatedUser) {
            return res.status(404).send({ error: 'Usuário não encontrado' });
        }
        return res.status(200).send(updatedUser);
    } catch (error) {
        return res.status(500).send({ error: 'Erro ao atualizar o usuário' });
    }
};

// Função para excluir um usuário
const deleteUser = async (req, res) => {
    const id = req.params.id;

    try {
        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).send({ error: 'Usuário não encontrado' });
        }
        return res.status(200).send(deletedUser);
    } catch (error) {
        return res.status(500).send({ error: 'Erro ao excluir o usuário' });
    }
};

// Função para encontrar todos os usuários
const findAll = async (req, res) => {
    try {
        const users = await User.find();
        return res.send(users);
    } catch (error) {
        return res.status(500).send({ error: 'Erro ao buscar os usuários' });
    }
};

// Função para encontrar um usuário por ID
const findById = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).send({ error: 'Usuário não encontrado' });
        }
        return res.status(200).send(user);
    } catch (error) {
        return res.status(500).send({ error: 'Erro ao buscar o usuário' });
    }
};

// Exporta as funções para serem usadas em outro lugar
module.exports = {
    findById,
    findAll,
    create,
    update,
    deleteUser, 
};
