const express = require('express');
const router = express.Router();

const productController = require('../controllers/ProductController');

router.use('/add-product', productController.add);
router.use('/', productController.index);

module.exports = router;
