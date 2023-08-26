const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

router.get('/service', serviceController.getAllServices);
router.post('/service', serviceController.createService);
router.get('/service/:id', serviceController.getServiceById);
router.delete('/service/:id', serviceController.deleteServiceById);

module.exports = router;