class SiteController {
  // [GET] /
  index(req, res) {
    res.locals = { title: 'Dashboard' };
    res.render('Dashboard/index');
  }

  categories(req, res) {
    res.locals = { title: 'Categories' };
    res.render('Store/categories');
  }

  tags(req, res) {
    res.locals = { title: 'Tags' };
    res.render('Store/tags');
  }

  orders(req, res) {
    res.locals = { title: 'Orders' };
    res.render('Customers/orders');
  }
}

module.exports = new SiteController();
