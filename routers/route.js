const express = require('express');
const bodyParser = require('body-parser');
const urlencodeParser = bodyParser.urlencoded({ extended: false });
const validator = require('express-validator');

const productsRouter = require('./product');
const customerRouter = require('./customer');
const invoiceRouter = require('./invoice');
const siteRouter = require('./site');
const editProductRouter = require('./edit-product');

module.exports = function (app) {
  function isUserAllowed(req, res, next) {
    sess = req.session;
    if (sess.user) {
      return next();
    } else {
      res.redirect('/login');
    }
  }

  app.use((req, res, next) => {
    if (req.path.substr(-1) === '/' && req.path.length > 1) {
      const query = req.url.slice(req.path.length);
      const safepath = req.path.slice(0, -1).replace(/\/+/g, '/');
      res.redirect(301, safepath + query);
    } else {
      next();
    }
  });

  // Store

  app.use('/products', isUserAllowed, productsRouter);

  app.use('/edit-product', isUserAllowed, editProductRouter);

  app.use('/add-product', isUserAllowed, productsRouter);

  //Customers
  app.use('/customers', isUserAllowed, customerRouter);
  app.get('/edit-customer', isUserAllowed, function (req, res) {
    res.locals = { title: 'Edit Customer' };
    res.render('Customers/edit-customer');
  });

  // Invoice
  app.use('/invoices-list', isUserAllowed, invoiceRouter);
  app.get('/invoices-detail', isUserAllowed, function (req, res) {
    res.locals = { title: 'Invoice Detail' };
    res.render('Invoice/invoices-detail');
  });

  // Contacts
  app.get('/contacts-list', isUserAllowed, function (req, res) {
    res.locals = { title: 'User List' };
    res.render('Contacts/contacts-list');
  });
  app.get('/contacts-profile', isUserAllowed, function (req, res) {
    res.locals = { title: 'Profile' };
    res.render('Contacts/contacts-profile');
  });

  // UI
  app.get('/ui-alerts', isUserAllowed, function (req, res) {
    res.locals = { title: 'Alerts' };
    res.render('Ui/ui-alerts');
  });
  app.get('/ui-buttons', isUserAllowed, function (req, res) {
    res.locals = { title: 'Buttons' };
    res.render('Ui/ui-buttons');
  });
  app.get('/ui-cards', isUserAllowed, function (req, res) {
    res.locals = { title: 'Cards' };
    res.render('Ui/ui-cards');
  });
  app.get('/ui-carousel', isUserAllowed, function (req, res) {
    res.locals = { title: 'Carousel' };
    res.render('Ui/ui-carousel');
  });
  app.get('/ui-dropdowns', isUserAllowed, function (req, res) {
    res.locals = { title: 'Dropdowns' };
    res.render('Ui/ui-dropdowns');
  });
  app.get('/ui-grid', isUserAllowed, function (req, res) {
    res.locals = { title: 'Grid' };
    res.render('Ui/ui-grid');
  });
  app.get('/ui-images', isUserAllowed, function (req, res) {
    res.locals = { title: 'Images' };
    res.render('Ui/ui-images');
  });
  app.get('/ui-lightbox', isUserAllowed, function (req, res) {
    res.locals = { title: 'Lightbox' };
    res.render('Ui/ui-lightbox');
  });
  app.get('/ui-modals', isUserAllowed, function (req, res) {
    res.locals = { title: 'Modals' };
    res.render('Ui/ui-modals');
  });
  app.get('/ui-rangeslider', isUserAllowed, function (req, res) {
    res.locals = { title: 'Range Slider' };
    res.render('Ui/ui-rangeslider');
  });
  app.get('/ui-session-timeout', isUserAllowed, function (req, res) {
    res.locals = { title: 'Session Timeout' };
    res.render('Ui/ui-session-timeout');
  });
  app.get('/ui-progressbars', isUserAllowed, function (req, res) {
    res.locals = { title: 'Progress Bars' };
    res.render('Ui/ui-progressbars');
  });
  app.get('/ui-sweet-alert', isUserAllowed, function (req, res) {
    res.locals = { title: 'Sweet Alert' };
    res.render('Ui/ui-sweet-alert');
  });
  app.get('/ui-tabs-accordions', isUserAllowed, function (req, res) {
    res.locals = { title: 'Tabs & Accordions' };
    res.render('Ui/ui-tabs-accordions');
  });
  app.get('/ui-typography', isUserAllowed, function (req, res) {
    res.locals = { title: 'Typography' };
    res.render('Ui/ui-typography');
  });
  app.get('/ui-video', isUserAllowed, function (req, res) {
    res.locals = { title: 'Video' };
    res.render('Ui/ui-video');
  });
  app.get('/ui-general', isUserAllowed, function (req, res) {
    res.locals = { title: 'General' };
    res.render('Ui/ui-general');
  });
  app.get('/ui-colors', isUserAllowed, function (req, res) {
    res.locals = { title: 'Colors' };
    res.render('Ui/ui-colors');
  });
  app.get('/ui-rating', isUserAllowed, function (req, res) {
    res.locals = { title: 'Rating' };
    res.render('Ui/ui-rating');
  });
  app.get('/ui-notifications', isUserAllowed, function (req, res) {
    res.locals = { title: 'Notifications' };
    res.render('Ui/ui-notifications');
  });

  // Forms
  app.get('/form-elements', isUserAllowed, function (req, res) {
    res.locals = { title: 'Basic Elements' };
    res.render('Form/form-elements');
  });
  app.get('/form-validation', isUserAllowed, function (req, res) {
    res.locals = { title: 'Validation' };
    res.render('Form/form-validation');
  });
  app.get('/form-advanced', isUserAllowed, function (req, res) {
    res.locals = { title: 'Advanced Plugins' };
    res.render('Form/form-advanced');
  });
  app.get('/form-editors', isUserAllowed, function (req, res) {
    res.locals = { title: 'Editors' };
    res.render('Form/form-editors');
  });
  app.get('/form-uploads', isUserAllowed, function (req, res) {
    res.locals = { title: 'File Uploads' };
    res.render('Form/form-uploads');
  });
  app.get('/form-xeditable', isUserAllowed, function (req, res) {
    res.locals = { title: 'Xeditable' };
    res.render('Form/form-xeditable');
  });
  app.get('/form-repeater', isUserAllowed, function (req, res) {
    res.locals = { title: 'Repeater' };
    res.render('Form/form-repeater');
  });
  app.get('/form-wizard', isUserAllowed, function (req, res) {
    res.locals = { title: 'Wizard' };
    res.render('Form/form-wizard');
  });
  app.get('/form-mask', isUserAllowed, function (req, res) {
    res.locals = { title: 'Form Mask' };
    res.render('Form/form-mask');
  });

  // Tables
  app.get('/tables-basic', isUserAllowed, function (req, res) {
    res.locals = { title: 'Bootstrap Basic' };
    res.render('Tables/tables-basic');
  });
  app.get('/tables-datatable', isUserAllowed, function (req, res) {
    res.locals = { title: 'Datatables' };
    res.render('Tables/tables-datatable');
  });
  app.get('/tables-responsive', isUserAllowed, function (req, res) {
    res.locals = { title: 'Responsive' };
    res.render('Tables/tables-responsive');
  });
  app.get('/tables-editable', isUserAllowed, function (req, res) {
    res.locals = { title: 'Editable' };
    res.render('Tables/tables-editable');
  });

  // Charts
  app.get('/charts-apex', isUserAllowed, function (req, res) {
    res.locals = { title: 'Apex' };
    res.render('Charts/charts-apex');
  });
  app.get('/charts-chartjs', isUserAllowed, function (req, res) {
    res.locals = { title: 'Chartjs' };
    res.render('Charts/charts-chartjs');
  });
  app.get('/charts-flot', isUserAllowed, function (req, res) {
    res.locals = { title: 'Flot' };
    res.render('Charts/charts-flot');
  });
  app.get('/charts-knob', isUserAllowed, function (req, res) {
    res.locals = { title: 'Jquery Knob' };
    res.render('Charts/charts-knob');
  });
  app.get('/charts-sparkline', isUserAllowed, function (req, res) {
    res.locals = { title: 'Sparkline' };
    res.render('Charts/charts-sparkline');
  });

  // Icons
  app.get('/icons-unicons', isUserAllowed, function (req, res) {
    res.locals = { title: 'Unicons' };
    res.render('Icons/icons-unicons');
  });
  app.get('/icons-boxicons', isUserAllowed, function (req, res) {
    res.locals = { title: 'Boxicons' };
    res.render('Icons/icons-boxicons');
  });
  app.get('/icons-materialdesign', isUserAllowed, function (req, res) {
    res.locals = { title: 'Material Design' };
    res.render('Icons/icons-materialdesign');
  });
  app.get('/icons-dripicons', isUserAllowed, function (req, res) {
    res.locals = { title: 'Dripicons' };
    res.render('Icons/icons-dripicons');
  });
  app.get('/icons-fontawesome', isUserAllowed, function (req, res) {
    res.locals = { title: 'Font Awesome' };
    res.render('Icons/icons-fontawesome');
  });

  // Maps
  app.get('/maps-google', isUserAllowed, function (req, res) {
    res.locals = { title: 'Google' };
    res.render('Maps/maps-google');
  });
  app.get('/maps-vector', isUserAllowed, function (req, res) {
    res.locals = { title: 'Vector' };
    res.render('Maps/maps-vector');
  });
  app.get('/maps-leaflet', isUserAllowed, function (req, res) {
    res.locals = { title: 'Leaflet' };
    res.render('Maps/maps-leaflet');
  });

  app.use('/', isUserAllowed, siteRouter);
};
