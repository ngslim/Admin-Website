class CustomerController {
  // [GET] /customers
  index(req, res) {
    res.locals = { title: 'Customers' };
    res.render('Customers/customer');
  }
}

module.exports = new CustomerController();
