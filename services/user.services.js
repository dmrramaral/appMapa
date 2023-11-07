const User = require('../models/user.model');

const findByIdUser = (id) => {
    return User.findById(id);
}

const findAllUser = () => {
    return User.find();

}

const createUser = (user) => {
    return User.create(user);

}

const updateUser = (id, user) => {
    return User.findByIdAndUpdate(id, user, { returnDocument: "after" });
}

const deleteUser = (id) => {
    return User.findByIdAndRemove(id);
}

module.exports = {
    findByIdUser,
    findAllUser,
    createUser,
    updateUser,
    deleteUser
}
