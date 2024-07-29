const express = require('express');
const { addReview, getReviews } = require('../controllers/reviewController');
const { protect } = require('../middlewares/auth');

const router = express.Router();

router.post('/', protect, addReview);
router.get('/:itemId', getReviews);

module.exports = router;
