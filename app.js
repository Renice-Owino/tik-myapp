const path = require('path');
const logger = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');

const countiesRoute = require('./routes/counties');
const db = require('./config/db.config.js');

const app = express();

/**
 * sync database tables
 */
db.sequelize.sync();

app.use(cookieParser());
app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require('./routes/index'));
app.use('/counties', countiesRoute);

app.use(express.static(path.join(__dirname, 'public')));

/**
 * Error handler
 * later will be converted to a middleware
 */

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});


/**
 * catch 404 and forward to error handler
 * later will be converted to a middleware
 */
app.use(function (req, res, next) {
  next(createError(404));
});

module.exports = app;
