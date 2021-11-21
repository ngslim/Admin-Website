class InvoiceController {
  // [GET] /invoices
  index(req, res) {
    res.locals = { title: 'Invoice List' };
    res.render('Invoice/invoice-list');
  }
}

module.exports = new InvoiceController();
