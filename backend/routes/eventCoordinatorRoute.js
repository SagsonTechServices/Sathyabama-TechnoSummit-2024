const express = require('express');
const eventCoordinatorController = require('../controllers//eventCoordinatorController');
const router = express.Router();

router.post('/login' ,eventCoordinatorController);

module.exports = router;