import path from 'path';
import express from 'express';
import exphbs  from 'express-handlebars';
import mongoose from 'mongoose';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';


import app = express();

import serverConfig from './config';

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