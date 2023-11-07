const MindMap = require('../services/mindMap.services');

// Função para criar um novo mapa mental
const create = async (req, res) => {
    const mindMap = req.body;

    try {
        const newMindMap = await MindMap.createMindMap(mindMap);
        return res.status(201).send(newMindMap);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: 'Erro ao criar mapa mental' });
    }
};

// Função para atualizar um mapa mental existente
const update = async (req, res) => {
    const id = req.params.id;
    const mindMap = req.body;

    try {
        return res.status(200).send(await MindMap.updateMindMap(id, mindMap, { new: true }));
    } catch (error) {
        return res.status(500).send({ error: 'Erro ao atualizar o mapa mental' });
    }
}

// Função para excluir um mapa mental
const deleteMindMap = async (req, res) => {
    const id = req.params.id;

    try {
        const deletedMindMap = await MindMap.deleteMindMap(id);
        if (!deletedMindMap) {
            return res.status(404).send({ error: 'Mapa mental não encontrado' });
        }
        return res.status(200).send(deletedMindMap);
    } catch (error) {
        return res.status(500).send({ error: 'Erro ao excluir o mapa mental' });
    }
};

const findAll = async (req, res) => {
    try {
        const mindMaps = await MindMap.findAllMindMap();
        return res.send(mindMaps);
    } catch (error) {
        return res.status(500).send({ error: 'Erro ao buscar os mapas mentais' });
    }
}

const findById = async (req, res) => {
    const id = req.params.id;

    try {
        const mindMap = await MindMap.findById(id);
        if (!mindMap) {
            return res.status(404).send({ error: 'Mapa mental não encontrado' });
        }
        return res.status(200).send(mindMap);
    } catch (error) {
        return res.status(500).send({ error: 'Erro ao buscar o mapa mental' });
    }
}

module.exports = {
    create,
    update,
    deleteMindMap,
    findAll,
    findById
};