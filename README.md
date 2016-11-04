# mern-stack
Another boilerplate code for getting started with MERN stack using Webpack

## Introduction
This is an example generic code to help you (and me) to get started with the MERN (MongoDB, ExpressJS, ReactJS and NodeJS) stack. It will include other usefull technologies that will also be useful on the development process.


## Simply Install & Execute
On this step you should be able to run the project typing:
```
  git clone https://github.com/ateixeira/mern-stack.git
  git checkout tags/3-Handlebars-ReactJS
  cd mern-stack
  npm install
  npm run build 
  npm start
```

# Or, follow my steps

## 1 - SetUP the npm + webpack bundler configs: 

### 1.1 - Creating package.json
*package.json* is the npm config file, it handles a bunch of metadata that will dictate how it's behaviour as well as dependencies and scripts execution.

To create execute: npm init

### 1.2 - Creating webpack.config.js
*webpack.config.js* is the Webpack config file, it exports the configuration object on module.exports

## 2 - SetUP very basic expressJS configuration

### 2.1 - Create ExpressJS dependency
Add the expressJS dependency executing:

``npm install express --save``

## 3 - SetUP reactJS and build Hello World app

### 3.1 - Create react and react-dom dependencies
Add the expressJS dependency executing:

``npm install react --save``
``npm install react-dom --save``

### 3.2 - Config and create template engine structure
I chose initially to use handlebars template engine, at first because I already knew it, also because I don't like Jade syntax and finally, because I was looking for layouts/partials structure.

``npm install express-handlebars --save``

