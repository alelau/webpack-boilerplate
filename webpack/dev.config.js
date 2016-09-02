// file : ./webpack/dev.config.js
'use strict'

const WebpackConfig = require('webpack-config')
const webpack = require('webpack')
const path = require('path')

module.exports = new WebpackConfig().extend('./webpack/base.config.js').merge({
    devtool: '#source-map',
    output: {
        filename: "[name].[hash].js",
        path: path.resolve('build')
    },
    module: {
        preLoaders: [
            {test: /\.js$/, loader: "source-map"}
        ]
    },
    htmlLoader: {
        ignoreCustomFragments: [/\{\{.*?}}/],
        root: path.resolve('build'),
        attrs: ['img:srcfg', 'link:href']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name: "vendor", filename: "vendor.[hash].js"})
    ]
})
