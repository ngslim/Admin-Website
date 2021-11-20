const Product = require('../models/Product');
const { mongooseToObject } = require('../util/mongoose');

class EditProductController {
  // [GET] /edit-product/:id
  detail(req, res, next) {
    Product.findOne({ id: req.params.id })
      .then((product) => {
        res.locals = { title: 'Edit Product' };
        res.render('Store/edit-product', {
          product: mongooseToObject(product),
        });
      })
      .catch(next);
  }
}

module.exports = new EditProductController();
