const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },

    email: { type: String, unique: true, required: true },

    password: { type: String, required: true },

    createdAt: { type: Date, default: Date.now },

    token: { type: String, required: false },



});

const User = mongoose.model("user", UserSchema);

module.exports = User;

