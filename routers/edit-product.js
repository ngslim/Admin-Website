const express = require('express');
const router = express.Router();

const editProductController = require('../controllers/EditProductController');

router.use('/:id', editProductController.detail);

module.exports = router;
