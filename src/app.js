const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const controllers = require('./controllers/index');
const bodyParser = require('body-parser');
require('env2')('config.env');

const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exphbs({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
  }));

  app.use(function (req, res, next) {
     console.log('Time:', Date.now());
     next();
  });

  app.use(cookieSession({
    name: 'session',
    secret: process.env.SESSION_SECRET,
    // the session will last for three days
    maxAge: 24 * 60 * 60 * 1000 * 3,
  }));
  
app.get('/home', controllers);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(controllers);

module.exports = app;
