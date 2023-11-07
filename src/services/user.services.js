const User = require('../models/user.model');

const findByIdUserService = (id) => {
    return User.findById(id);
}

const findAllUserService = () => {
    return User.find();

}

const createUserService = (user) => {
    return User.create(user);

}

const updateUserService = (id, user) => {
    return User.findByIdAndUpdate(id, user, { returnDocument: "after" });
}

const deleteUserService = (id) => {
    return User.findByIdAndRemove(id);
}

module.exports = {
    findByIdUserService,
    findAllUserService,
    createUserService,
    updateUserService,
    deleteUserService
}
