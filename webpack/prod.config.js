// file : ./webpack/prod.config.js

'use strict'
const webpack = require('webpack')
const WebpackConfig = require('webpack-config')

module.exports = (new WebpackConfig()).extend('./webpack/base.config.js').merge({
    output: {
        filename: "bundle.[chunkhash].js"
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true, // eslint-disable-line
                warnings: false
            }
        }),
        new webpack.optimize.AggressiveMergingPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false,
            quiet: true
        })
    ]

})