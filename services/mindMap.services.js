const MindMap = require('../models/mindMap.model');

// Função para criar um novo mapa mental na base de dados
const createMindMap = (mindMap) => {
    return MindMap.create(mindMap);
}

// Função para atualizar um mapa mental existente
const updateMindMap = (id, mindMap) => {

    /* Vou alterar para o metodo FindOne para atualizar a data quando for atualizado o objeto
    parece que o o findBy não executa o pre que estou chamando no model 
    Não funcionou
    */
    return MindMap.findOneAndUpdate({_id :id }, mindMap, { new: true});
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