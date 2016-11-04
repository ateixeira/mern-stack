var path = require('path');
var express = require('express');
var exphbs  = require('express-handlebars');

var app = express();


// set the port of our application
// process.env.PORT lets the port be set by Heroku
app.set('port', process.env.PORT || 3000);
// app.set('views', __dirname + '/views');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(app.get('port'), function () {
  console.log('MERN stack app listening on port ' + app.get('port') + '!');
});