const MindMap = require('../models/mindMap.model');

// Função para criar um novo mapa mental na base de dados
const createMindMap = (mindMap) => {
    return MindMap.create(mindMap);
}

// Função para atualizar um mapa mental existente
const updateMindMap = (id, mindMap) => {
    return MindMap.findByIdAndUpdate(id, mindMap, { returnDocument: "after" });
}

// Função para excluir um mapa mental
const deleteMindMap = (id) => {
    return MindMap.findByIdAndRemove(id);
}

const findAllMindMap = () => {
    return MindMap.find();

}

const findByIdMindMap = (id) => {
    return MindMap.findById(id);
}

module.exports = {
    createMindMap,
    updateMindMap,
    deleteMindMap,
    findAllMindMap,
    findByIdMindMap
}