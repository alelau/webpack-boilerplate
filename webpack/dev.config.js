// file : ./webpack/dev.config.js
'use strict'

const WebpackConfig = require('webpack-config')

module.exports = (new WebpackConfig()).extend('./webpack/base.config.js').merge({
    output: {
        filename: "bundle.[hash].js"
    }
})