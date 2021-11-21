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
        res.render('Store/product', {
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

  // [POST] /products/store
  store(req, res, next) {
    const product = new Product(req.body);
    product.save();
    res.redirect('/product');
  }

  // [PUT] /product/:id
  save(req, res, next) {
    Product.updateOne({ id: req.params.id }, req.body)
      .then(() => res.redirect('/product'))
      .catch(next);
  }

  // [DELETE] /product/:_id
  delete(req, res, next) {
    Product.deleteOne({ _id: req.params._id })
      .then(() => res.redirect('back'))
      .catch(next);
  }

  // [GET] /product/:id
  edit(req, res, next) {
    Product.findOne({ id: req.params.id })
      .then((product) => {
        Category.find({})
          .then((categories) => {
            Tag.find({})
              .then((tags) => {
                res.locals = { title: 'Edit Product' };
                res.render('Store/edit-product', {
                  product: product,
                  categories: categories,
                  tags: tags,
                });
              })
              .catch(next);
          })
          .catch(next);
      })
      .catch(next);
  }
}

module.exports = new ProductController();
