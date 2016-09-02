// file : ./webpack/prod.config.js

'use strict'
const webpack = require('webpack')
const WebpackConfig = require('webpack-config')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const path = require('path')

module.exports = (new WebpackConfig()).extend('./webpack/base.config.js').merge({
    output: {
        filename: "bundle.[chunkhash].js",
        path: path.resolve('dist')
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                screw_ie8: true, // eslint-disable-line
                warnings: false
            },
            output: {
                comments: false
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
        }),
        new webpack.optimize.CommonsChunkPlugin({name: "vendor", filename: "bundle.[chunkhash].js"}),
        new OptimizeCssAssetsPlugin({
            //assetNameRegExp: /\.optimize\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {discardComments: {removeAll: true}},
            canPrint: true
        })

    ]

})
