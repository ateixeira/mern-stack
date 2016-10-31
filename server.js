var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('<center><h1>Hello Express! 💛</h1></center>');
});

app.listen(port, function () {
  console.log('MERN stack app listening on port 3000!');
});