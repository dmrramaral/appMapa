const router = require('express').Router();


const auth = require('../controllers/auth.controllers');




router.post('/login', auth.login);


module.exports = router;