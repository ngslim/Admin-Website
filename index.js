const app = require('express')();

const express = require('express');
const path = require('path');
const http = require('http').Server(app);
const validator = require('express-validator');
const port = process.env.PORT || 8000;

// import controller
const AuthController = require('./controllers/AuthController');

// import Router file
const pageRouter = require('./routers/route');

const db = require('./config/db');
db.connect();

const session = require('express-session');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
app.use(bodyParser.json());
const urlencodeParser = bodyParser.urlencoded({ extended: true });
const methodOverride = require('method-override');

app.use(
  session({
    key: 'user_sid',
    secret: 'somerandonstuffs',
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 1200000,
    },
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(methodOverride('_method'));

app.use(
  session({ resave: false, saveUninitialized: true, secret: 'nodedemo' })
);
app.use(flash());

app.use('/public', express.static(path.join(__dirname, '/public')));

app.get('/layouts/', function (req, res) {
  res.render('view');
});

// apply controller
AuthController(app);

//For set layouts of html view
const expressLayouts = require('express-ejs-layouts');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);

// Define All Route
pageRouter(app);

app.get('/', function (req, res) {
  res.redirect('/');
});

http.listen(port, function () {
  console.log('listening on *: ', port);
});
