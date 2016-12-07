const path = require('path')
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const webpackConfig = {
    devtool: 'source-map',

    entry: [
        "./src/index",
    ],

    output: {
        path: path.join(__dirname, 'public'),
        filename: "bundle.js"
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin("style.css")
    ],

    module: {
        loaders: [
            {
                loader: "babel-loader",
                test: /\.js$/,
                exclude: /node_modules/
            },{ 
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")
            },{ 
                test: /\.png$/,
                loader: 'file' 
            },{ 
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file'
            }
        ]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, "./src/styles")]
    }
};

module.exports = webpackConfig;