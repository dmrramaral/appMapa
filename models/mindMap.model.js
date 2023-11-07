const mongoose = require('mongoose');

const MindMapSchema = new mongoose.Schema({
    areaEstudo: {type: String, required: true},
    topicoArea: {type: String, required: true},
    description: {type: String, required: true},
    mindMapImage: {type: String},
    userId: {type: String, required: true},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
});

const MindMap = mongoose.model("mindMap", MindMapSchema);

module.exports = MindMap;