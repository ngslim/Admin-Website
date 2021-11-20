const express = require('express');
const router = express.Router();

const productController = require('../controllers/ProductController');

router.post('/store', productController.store);
router.use('/create', productController.create);
router.use('/', productController.index);

module.exports = router;
