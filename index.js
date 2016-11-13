if (process.env.NODE_ENV === 'production') {
  require('./build/server.bundle.js');
} else {
  require('./server/server');
}
