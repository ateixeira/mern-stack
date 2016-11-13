var webpack = require('webpack');

var webpackConfig = {
	entry: "./client/app.js",
	output: {
		path: "build",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				loader: "babel-loader",
				test: /\.js$/,
				exclude: /node_modules/,
		        query: {
		        	presets: ['es2015', 'react']
		        }
			}
		]
	}
};

module.exports = webpackConfig;