const MindMap = require('../models/mindMap.model');

// Função para criar um novo mapa mental na base de dados
const createMindMap = (MindMap) => {
    return MindMap.create(MindMap);
}

// Função para atualizar um mapa mental existente
const updateMindMap = (id, mindMap) => {
    return MindMap.findByIdAndUpdate(id, mindMap, { returnDocument: "after" });
}