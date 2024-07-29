const express = require('express');
const { uploadItemImage } = require('../controllers/itemController');
const upload = require('../middlewares/multer');

const router = express.Router();

router.post('/upload', upload.single('image'), uploadItemImage);
router.get('/', getItems);

module.exports = router;
