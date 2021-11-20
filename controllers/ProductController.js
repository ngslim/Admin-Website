const Product = require('../models/Product');
const Tag = require('../models/Tag');
const Category = require('../models/Category');
const { multipleMongooseToObject } = require('../util/mongoose');

class ProductController {
  // [GET] /products
  index(req, res, next) {
    Product.find({})
      .then((products) => {
        res.locals = { title: 'Products' };
        res.render('Store/products', {
          products: products,
        });
      })
      .catch(next);
  }

  // [GET] /products/create
  create(req, res, next) {
    Tag.find({})
      .then((tags) => {
        Category.find({})
          .then((categories) => {
            res.locals = { title: 'Add Product' };
            res.render('Store/add-product', {
              tags: tags,
              categories: categories,
            });
          })
          .catch(next);
      })
      .catch(next);
  }

  store(req, res, next) {
    //res.json(req.body);
    const product = new Product(req.body);
    product.save();
  }
}

module.exports = new ProductController();
