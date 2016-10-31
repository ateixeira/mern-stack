var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('<center><h1>Hello Express! 💛</h1></center>');
});

app.listen(3000, function () {
  console.log('MERN stack app listening on port 3000!');
});