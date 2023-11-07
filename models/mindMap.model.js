const mongoose = require('mongoose');

const MindMapSchema = new mongoose.Schema({
    areaEstudo: { type: String, required: true },
    topicoArea: { type: String, required: true },
    description: { type: String, required: true },
    mindMapImage: { type: String, required: true },
    userId: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

/* Preciso fazer com que gere a data de atualização toda vez que atualizar. Está sendo gerado
apenas na criação do Obj */

/* Teste de Atualização da Data de Update */

/* Não funcionou 
MindMapSchema.pre('findOneAndUpdate', function (next) {
    this._updatedAt = Date.now();
    next();
});
 */
const MindMap = mongoose.model("mindMap", MindMapSchema);

module.exports = MindMap;