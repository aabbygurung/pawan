var express = require('express');
var app = express();
var path = require('path');
var logger = require('morgan');
var routes = require('./routes/user.js'); //or user

app.set('views', path.join(__dirname,'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine','html');

app.use(logger('dev'));
app.use('/', routes);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(8000, function(req, res) {
  console.log('Server is running on port 8000...');
});