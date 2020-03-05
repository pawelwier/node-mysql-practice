var express = require('express');
var path = require('path');
var logger = require('morgan');

var get_from_db = require('./db');
console.log("zxcv" + get_from_db);

var indexRouter = require('./routes/index');

var app = express();

var db = require('./db');

app.use(logger('dev'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/', indexRouter);

module.exports = app;