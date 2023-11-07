const User = require('../models/user.model');
const jwt = require('jsonwebtoken');


const loginService = (email) => User.findOne({ email });

/* Pelo que pude perceber o responsável pela inserção do Token dentro do Obj é o Auth */
const updateTokenService = (user) => {
    return User.findByIdAndUpdate(user.id, user, { returnDocument: "after" });
}

const generateToken = (id, secret) => jwt.sign({ id }, secret, { expiresIn: 600 });


module.exports = {
    loginService,
    updateTokenService,
    generateToken
}