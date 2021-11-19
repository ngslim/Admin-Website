class ProductController {
  // [GET] /products
  index(req, res) {
    res.locals = { title: 'Products' };
    res.render('Store/products');
  }
}

module.exports = new ProductController();
