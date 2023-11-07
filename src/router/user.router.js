const router = require('express').Router();
const loginController = require('../controllers/user.controller');


router.get('/findAll', loginController.findAll)

router.get('/findById/:id', loginController.findById)

router.post('/create', loginController.create)

router.put('/update/:id', loginController.update)

router.delete('/delete/:id', loginController.deleteUser)



module.exports = router;