if (process.env.NODE_ENV === 'production') {
  require('./public/server.bundle.js');
} else {
  require('./server/server');
}
