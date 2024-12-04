const express = require('express');
const router = express.Router();
const BusController = require('../controllers/BusController');

router.get('/', BusController.getAllBuses);
router.post('/', BusController.createBus);

module.exports = router;
