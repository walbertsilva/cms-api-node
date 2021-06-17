var createError = require('http-errors');
var express = require('express');
var app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const cors = require("cors");
app.use(cors());

var auth = require('./auth/auth')

var categoryRouter = require('./routes/category');
var contentRouter = require('./routes/content');
var blogRouter    = require('./routes/blog');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/category', auth, categoryRouter);
app.use('/content', auth, contentRouter);
app.use('/blog', blogRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
