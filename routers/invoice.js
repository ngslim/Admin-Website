const express = require('express');
const router = express.Router();

const invoiceController = require('../controllers/InvoiceController');

router.use('/', invoiceController.index);

module.exports = router;
