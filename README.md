# mern-stack
Another boilerplate code for getting started with MERN stack using Webpack

## Introduction
This is an example generic code to help you (and me) to get started with the MERN (MongoDB, ExpressJS, ReactJS and NodeJS) stack. It will include other useful technologies that are listed below:

* M ongoDB
* E xpressJS
* R eactJS
* N odeJS

As well as:

* BabelJS - https://www.babeljs.io/
* css-loader - https://github.com/webpack/css-loader/
* node-sass - https://github.com/sass/node-sass/
* sass-loader - https://github.com/jtangelder/sass-loader/
* react-bootstrap - https://react-bootstrap.github.io/
* style-loader - https://github.com/webpack/style-loader/
* Webpack - https://webpack.github.io/
* webpack-dev-middleware - https://github.com/webpack/webpack-dev-middleware/
* webpack-hot-middleware - https://github.com/glenjamin/webpack-hot-middleware/

## Install
On this step you should be able to run the project typing:
```
  git clone https://github.com/ateixeira/mern-stack.git
  git checkout tags/3-Handlebars-ReactJS
  cd mern-stack
  npm install
```
## Build the app
```
  npm run build
```
## Run the development server
```
  npm start
```
## Production deployment
The webpack configuration file was separeted in **webpack.prod.config.js** and **webpack.dev.config.js**. On server/server.js file, based on the env variable ENV_NODE, the proper configuration file is loaded on webpack hot/dev middleware in case of development env.

When deployed to production (first tests were made using Heroku), the npm **postintall** directive when called runs **npm run build**, that sets the ENV_NODE to production and bundles the app with the --config flag pointing to the production config file.

To try it on heroku just push the app up and it will transparently be set-UP.