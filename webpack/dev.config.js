// file : ./webpack/dev.config.js
'use strict'

const WebpackConfig = require('webpack-config')
const webpack = require('webpack')

module.exports = new WebpackConfig().extend('./webpack/base.config.js').merge({
    devtool: '#cheap-module-eval-source-map',
    output: {
        filename: "[name].[hash].js"
    },
    module: {
        preLoaders: [
            {test: /\.js$/, loader: "source-map"}
        ]
    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({name:"vendor", filename:"vendor.[hash].js"})
    ]
})