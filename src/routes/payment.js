const express = require('express');
const { createPayment, refundPayment } = require('../controllers/paymentController');
const { protect } = require('../middlewares/auth');
const router = express.Router();

router.post('/create', protect, createPayment);
router.post('/refund', protect, refundPayment);

module.exports = router;
