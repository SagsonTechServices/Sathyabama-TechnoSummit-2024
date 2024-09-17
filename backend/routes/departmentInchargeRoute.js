const express = require('express');
const departmentInchargeController = require('../controllers/departmentInchargeController');
const router = express.Router();

router.post('/login' ,departmentInchargeController);

module.exports = router;
