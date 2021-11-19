class CustomerController {
  // [GET] /customers
  index(req, res) {
    res.locals = { title: 'Customers' };
    res.render('Customers/customers');
  }
}

module.exports = new CustomerController();
