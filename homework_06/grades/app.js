var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const gradesRouter =  require('./routes/grades');
const validateJson = require('./middlewares/validate-json');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
//app.use(logger('dev'));
app.use(morgan('combined'));
app.use(validateJson);
//app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/grades', cors({methods:'GET,HEAD,PUT,POST,DELETE'}), gradesRouter);
//app.use('/grades', gradesRouter);

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
  if (req.header("Content-Type") == "application/json"){
    res.json(err);
  }else{
    res.render('error');
  }
});

app.listen(9000);
module.exports = app;
