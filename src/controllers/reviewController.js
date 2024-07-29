const Review = require('../models/Review');

exports.addReview = async (req, res) => {
  const { itemId, rating, comment } = req.body;
  try {
    const review = new Review({ item: itemId, user: req.user.id, rating, comment });
    await review.save();
    res.status(201).json({ success: true, data: review });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ item: req.params.itemId });
    res.status(200).json({ success: true, data: reviews });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
