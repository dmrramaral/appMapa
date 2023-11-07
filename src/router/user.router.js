const router = require('express').Router();
const loginController = require('../controllers/user.controller');


router.get('/findAll', loginController.findAllController)

router.get('/findById/:id', loginController.findByIdController)

router.post('/create', loginController.createController)

router.put('/update/:id', loginController.updateController)

router.delete('/delete/:id', loginController.deleteUserController)



module.exports = router;