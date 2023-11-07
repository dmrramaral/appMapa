const User = require('../models/user.model');

const loginService = (email) => User.findOne({ email });

/* Pelo que pude perceber o responsável pela inserção do Token dentro do Obj é o Auth */
const updateTokenService = (user) => {
    return User.findByIdAndUpdate(user.id, user, { returnDocument: "after" });
}


module.exports = {
    loginService,
    updateTokenService,
}