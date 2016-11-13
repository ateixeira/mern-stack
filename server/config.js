const config = {
  port: process.env.PORT || 3000,
  mongo_url: process.env.MONGO_URL || 'mongodb://localhost:27017/mern-stack',
};

module.exports = config;