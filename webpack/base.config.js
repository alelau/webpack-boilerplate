// file : ./webpack/base.config.js
'use strict'

const webpack = require('webpack')
const WebpackConfig = require('webpack-config')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const NpmCheckPlugin = require('npm-check-webpack-plugin');

module.exports = new WebpackConfig().merge({
    entry: {
        app: path.resolve("src"),
        //vendor: ['lodash']
    },
    context: path.resolve('src'),
    plugins: [
        new NpmCheckPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new webpack.ProvidePlugin({
            "_": "lodash",
            //"angular": "angular"//this does not work maybe check NgRequirePlugin
        })
    ],
    output: {
        path: path.resolve("dist")
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel!eslint', exclude: /node_modules/},
            {test: /\.less$/, loader: "style!css!less", exclude: /node_modules/}
        ]
    }
})