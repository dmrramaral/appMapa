const router = require('express').Router();


const auth = require('../controllers/auth.controllers');




router.post('/login', auth.login);

router.get('/autorization', auth.autorization);


module.exports = router;