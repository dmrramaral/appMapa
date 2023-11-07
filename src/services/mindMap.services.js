const MindMap = require('../models/mindMap.model');

// Função para criar um novo mapa mental na base de dados
const createMindMapService = (mindMap) => {
    return MindMap.create(mindMap);
}

// Função para atualizar um mapa mental existente
const updateMindMapService = (id, mindMap) => {

    /* Vou alterar para o metodo FindOne para atualizar a data quando for atualizado o objeto
    parece que o o findBy não executa o pre que estou chamando no model 
    Não funcionou
    */
    return MindMap.findOneAndUpdate({_id :id }, mindMap, { new: true});
}

// Função para excluir um mapa mental
const deleteMindMapService = (id) => {
    return MindMap.findByIdAndRemove(id);
}

const findAllMindMapService = () => {
    return MindMap.find();

}

const findByIdMindMapService = (id) => {
    return MindMap.findById(id);
}

module.exports = {
    createMindMapService,
    updateMindMapService,
    deleteMindMapService,
    findAllMindMapService,
    findByIdMindMapService
}