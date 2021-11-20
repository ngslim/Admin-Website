const Product = require('../models/Product');
const Tag = require('../models/Tag');
const { multipleMongooseToObject } = require('../util/mongoose');

class ProductController {
  // [GET] /products
  index(req, res, next) {
    Product.find({})
      .populate('tag', 'name')
      .then((products) => {
        res.locals = { title: 'Products' };
        res.render('Store/products', {
          products: multipleMongooseToObject(products),
          tags: Tag.find({}),
        });
      })
      .catch(next);
  }

  // [GET] /products/add-product
  add(req, res, next) {
    res.locals = { title: 'Add Product' };
    res.render('Store/add-product');
  }
}

module.exports = new ProductController();
