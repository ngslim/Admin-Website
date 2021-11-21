const express = require('express');
const router = express.Router();

const productController = require('../controllers/ProductController');

router.post('/store', productController.store);
router.use('/create', productController.create);
router.put('/:id', productController.save);
router.delete('/:_id', productController.delete);
router.get('/:id', productController.edit);
router.use('/', productController.index);

module.exports = router;
