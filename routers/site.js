const express = require('express');
const router = express.Router();

const siteController = require('../controllers/SiteController');

router.use('/category', siteController.categories);
router.use('/tag', siteController.tags);
router.use('/order', siteController.orders);
router.use('/', siteController.index);

module.exports = router;
