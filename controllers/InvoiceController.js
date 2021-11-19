class InvoiceController {
  // [GET] /invoices
  index(req, res) {
    res.locals = { title: 'Invoice List' };
    res.render('Invoice/invoices-list');
  }
}

module.exports = new InvoiceController();
