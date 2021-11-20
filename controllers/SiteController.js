class SiteController {
  // [GET] /
  index(req, res) {
    res.locals = { title: 'Dashboard' };
    res.render('Dashboard/index');
  }

  // [GET] /categories
  categories(req, res) {
    res.locals = { title: 'Categories' };
    res.render('Store/categories');
  }

  // [GET] /tags
  tags(req, res) {
    res.locals = { title: 'Tags' };
    res.render('Store/tags');
  }

  // [GET] /orders
  orders(req, res) {
    res.locals = { title: 'Orders' };
    res.render('Customers/orders');
  }
}

module.exports = new SiteController();
