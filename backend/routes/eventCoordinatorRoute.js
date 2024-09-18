const express = require('express');
const eventCoordinatorController = require('../controllers//eventCoordinatorController');
const router = express.Router();

router.post('/login' ,eventCoordinatorController.coordinatorLogin);
router.post('/download',eventCoordinatorController.download,eventCoordinatorController.linkdownload);
router.post('/teamdetails',eventCoordinatorController.teamdetails);

module.exports = router;