const userService = require('../services/user.services');
const mongoose = require('mongoose');

// Função para criar um novo usuário
const createController = async (req, res) => {
    /* Inseri o async para poder inserir o await dentro do metodo para esperar ele aguarde até que seja resolvido e retornar o valor do Metodo */
    const user = req.body;

    if (!user.name || !user.email || !user.password) {
        return res.status(400).send({ error: 'Dados incompletos' });
    }

    if (user.password.length < 6) {
        return res.status(400).send({ error: 'A senha deve ter no mínimo 6 caracteres' });
    }

    try {
        const createdUser = await userService.createUserService(user);
        return res.status(201).send(createdUser);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: 'Erro ao criar usuário' });
    }
};

// Função para atualizar um usuário existente
const updateController = async (req, res) => {
    const id = req.params.id;
    const user = req.body;

    try {
        const updatedUser = await userService.updatedUserService(id, user, { new: true });
        if (!updatedUser) {
            return res.status(404).send({ error: 'Usuário não encontrado' });
        }
        return res.status(200).send(updatedUser);
    } catch (error) {
        return res.status(500).send({ error: 'Erro ao atualizar o usuário' });
    }
};

// Função para excluir um usuário
const deleteUserController = async (req, res) => {
    const id = req.params.id;

    try {
        const deletedUser = await userService.deleteUserService(id);
        if (!deletedUser) {
            return res.status(404).send({ error: 'Usuário não encontrado' });
        }
        return res.status(200).send(deletedUser);
    } catch (error) {
        return res.status(500).send({ error: 'Erro ao excluir o usuário' });
    }
};

// Função para encontrar todos os usuários
const findAllController = async (req, res) => {
    try {
        const users = await userService.findAllUserService();
        return res.send(users);
    } catch (error) {
        return res.status(500).send({ error: 'Erro ao buscar os usuários' });
    }
};

// Função para encontrar um usuário por ID
const findByIdController = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await userService.findByIdUserService(id);
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
    findByIdController,
    findAllController,
    createController,
    updateController,
    deleteUserController, 
};
