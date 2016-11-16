const path = require('path')
const webpack = require('webpack');

var webpackConfig = {
    devtool: 'source-map',

    entry: [
        "./src/app",
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
        })
    ],

    module: {
        loaders: [
            {
                loader: "babel-loader",
                test: /\.js$/,
                exclude: /node_modules/
            },{ test: /\.scss?$/,
                loader: 'style!css!sass',
                include: path.join(__dirname, 'src', 'styles') 
            },{ test: /\.png$/,
                loader: 'file' 
            },{ test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file'
            }
        ]
    }
};

module.exports = webpackConfig;