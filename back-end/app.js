var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

const passport = require('passport');
const session = require('express-session');

var calendarRouter = require('./routes/calendar');
var usersRouter = require('./routes/users');

var app = express();

mongoose.createConnection('mongodb://localhost:27017');

mongoose
    .connect('mongodb://localhost:27017/mongo-calendar', {useNewUrlParser: true})
    .catch((reason) => {
      console.log('Unable to connect to the mongodb instance. Error: ', reason);
    });

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

require('./config/passport');
app.use(passport.initialize());
app.use(session({secret: 'SECRET', cookie: {maxAge: 60000}, resave: false, saveUninitialized: false}));

app.use('/calendar', calendarRouter);
app.use('/users', usersRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
