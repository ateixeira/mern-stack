var path = require('path');
var express = require('express');
var app = express();


// set the port of our application
// process.env.PORT lets the port be set by Heroku
app.set('port', process.env.PORT || 3000);

app.set('views', __dirname + '/views');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.listen(app.get('port'), function () {
  console.log('MERN stack app listening on port ' + app.get('port') + '!');
});