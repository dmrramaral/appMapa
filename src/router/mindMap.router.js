const router = require('express').Router();
const mindMapController = require('../controllers/mindMap.controller');

router.get('/findAll', mindMapController.findAllController);

router.get('/findById/:id', mindMapController.findByIdController);

router.post('/create', mindMapController.createController);

router.put('/update/:id', mindMapController.updateController);

router.delete('/delete/:id', mindMapController.deleteMindMapController);

module.exports = router;