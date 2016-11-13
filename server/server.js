var path = require('path');
var express = require('express');
var exphbs  = require('express-handlebars');
var mongoose = require('mongoose');


var app = express();

var serverConfig = require('./config');

// Connection to MongoDB
mongoose.connect(serverConfig.mongo_url, (error) => {
  if (error) {
    console.error('Please verify if Mongodb is up and running!');
    throw error;
  }
});

// Serve public assets and static content
app.use('/static', express.static(path.resolve(__dirname, '../build')));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

require('./routes/routes')(app);

app.listen(serverConfig.port, function () {
  console.log('MERN stack app listening on port ' + serverConfig.port + '!');
});