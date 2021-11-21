class SiteController {
  // [GET] /
  index(req, res) {
    res.locals = { title: 'Dashboard' };
    res.render('Dashboard/index');
  }

  // [GET] /categories
  categories(req, res) {
    res.locals = { title: 'Categories' };
    res.render('Store/category');
  }

  // [GET] /tags
  tags(req, res) {
    res.locals = { title: 'Tags' };
    res.render('Store/tag');
  }

  // [GET] /orders
  orders(req, res) {
    res.locals = { title: 'Orders' };
    res.render('Customers/order');
  }
}

module.exports = new SiteController();
