// file : ./webpack/dev.config.js
'use strict'

const WebpackConfig = require('webpack-config')

module.exports = new WebpackConfig().extend('./webpack/base.config.js').merge({
    devtool: '#cheap-module-eval-source-map',
    output: {
        filename: "bundle.[hash].js"
    },
    module: {
        preLoaders: [
            {test: /\.js$/, loader: "source-map"}
        ]
    }
})