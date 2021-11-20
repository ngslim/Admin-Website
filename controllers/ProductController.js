const Product = require('../models/Product');
const { multipleMongooseToObject } = require('../util/mongoose');

class ProductController {
  // [GET] /products
  index(req, res, next) {
    Product.find({})
      .then((products) => {
        res.locals = { title: 'Products' };
        res.render('Store/products', {
          products: multipleMongooseToObject(products),
        });
      })
      .catch(next);
  }
}

module.exports = new ProductController();
