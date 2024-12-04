const express = require('express');
const router = express.Router();
const RouteController = require('../controllers/RouteController');

router.get('/', RouteController.getAllRoutes);
router.post('/', RouteController.createRoute);

module.exports = router;
