const express = require('express');
const { notifyUser } = require('../controllers/notificationController.js');
const router = express.Router();

router.post('/send', notifyUser);

module.exports = router;
