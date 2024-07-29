const cloudinary = require('../config/cloudinary');
const Item = require('../models/Item');

exports.uploadItemImage = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const newItem = new Item({ ...req.body, image: result.secure_url });
    await newItem.save();
    res.status(201).json({ success: true, data: newItem });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getItems = async (req, res) => {
  const { keyword, minPrice, maxPrice, category } = req.query;
  let query = {};

  if (keyword) {
    query.name = { $regex: keyword, $options: 'i' };
  }

  if (minPrice || maxPrice) {
    query.price = {};
    if (minPrice) query.price.$gte = minPrice;
    if (maxPrice) query.price.$lte = maxPrice;
  }

  if (category) {
    query.category = category;
  }

  try {
    const items = await Item.find(query);
    res.status(200).json({ success: true, data: items });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
