const User = require('../models/user.model');

const loginService = (email) => User.findOne({ email });

module.exports = {
    loginService
}