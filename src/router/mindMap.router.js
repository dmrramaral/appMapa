const router = require('express').Router();
const mindMapController = require('../controllers/mindMap.controller');

router.get('/findAll', mindMapController.findAll);

router.get('/findById/:id', mindMapController.findById);

router.post('/create', mindMapController.create);

router.put('/update/:id', mindMapController.update);

router.delete('/delete/:id', mindMapController.deleteMindMap);

module.exports = router;