const path = require('path')
const webpack = require('webpack');

var webpackConfig = {
    devtool: 'eval',

    entry: [
        'webpack-hot-middleware/client',
        './src/app.js'
    ],

    output: {
        path: path.join(__dirname, 'public'),
        filename: "bundle.js",
        publicPath: '/public/'
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
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