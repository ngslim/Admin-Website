const express = require('express');
const router = express.Router();

const siteController = require('../controllers/SiteController');

router.use('/categories', siteController.categories);
router.use('/tags', siteController.tags);
router.use('/orders', siteController.orders);
router.use('/', siteController.index);

module.exports = router;
