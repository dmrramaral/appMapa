const router = require('express').Router();
const loginController = require('../controllers/login.controller');


router.get('/findAll', loginController.findAll)

router.get('/findById/:id', loginController.findById)

router.post('/create', loginController.create)



module.exports = router;