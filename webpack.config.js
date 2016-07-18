var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    output: {
        path: './dist',
        filename: "bundle.[hash].js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css"}
        ]
    }
};

//http://stackoverflow.com/questions/35054082/webpack-how-to-build-production-code-and-how-to-use-it