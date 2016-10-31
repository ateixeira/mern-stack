var webpack = require('webpack');

var webpackConfig = {
	entry: "./src/app.js",
	output: {
		path: "build",
		filename: "bundle.js"
	}
};

module.exports = webpackConfig;