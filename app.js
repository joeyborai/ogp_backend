var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var multer = require('multer');

var orderRouter = require('./routes/orders');
var catalogRouter = require('./routes/catalog');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('ogp_web/build'));

//Adding in routes
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'ogp_web', 'build', 'index.html'));
})
app.use('/catalog', catalogRouter);
app.use('/orders', orderRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//commen
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(3001, () => console.log('Backend up and running!'))

module.exports = app;
