// file : ./webpack/base.config.js
'use strict'

const webpack = require('webpack')
const WebpackConfig = require('webpack-config')
const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoPreFixer = require('autoprefixer')
var CopyWebpackPlugin = require('copy-webpack-plugin');

const extractCss = new ExtractTextPlugin({
    filename: '[name].css',
    allChunks: true
})

module.exports = new WebpackConfig().merge({
    entry: {
        vendor: ['babel-polyfill', 'lodash', 'jquery', 'angular', 'angular-material', 'angular-animate', 'angular-messages', 'angular-aria', 'angular-ui-router', 'oclazyload', 'restangular'],
        app: [path.resolve('src')]
    },
    resolve: {
        // root: [path.resolve('./src/less')]
        modules: [path.resolve('src/less'), 'node_modules']
        //extensions: ['.js','.less']
    },
    context: path.resolve('src'),
    plugins: [
        //new NpmCheckPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        extractCss,
        new CopyWebpackPlugin([
            // Copy glob results (with dot files) to /absolute/path/
            {
                from: {
                    glob: path.resolve('src') + '/assets/**/*',
                    dot: true
                },
                to: path.resolve('dist')
            }
        ])
        //extractPGLess
    ],
    output: {
        path: path.resolve('dist')
    },
    module: {
        loaders: [
            {test: /jquery.js$/, loader: 'expose?jQuery', include: /node_modules(\/|\\)jquery/},
            {test: /angular.js$/, loader: 'imports?$=jquery', include: /node_modules(\/|\\)angular/},
            {test: /\.js$/, loader: 'babel!eslint', include: /src/},
            {
                test: /\.css$/,
                loader: extractCss.extract({
                    loader: 'css?importLoaders=1'
                })
            },
            // Optionally extract less files
            // or any other compile-to-css language
            {
                test: /\.less$/,
                loader: extractCss.extract({
                    loader: 'css!postcss!less'
                })
            },
            {
                test: /angular-material\.js$/,
                loader: 'string-replace',
                query: {
                    search: 'NUM_EXTRA = 3',
                    replace: 'NUM_EXTRA = 10'
                }
            },
            // font awesome
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'url-loader?limit=100000'
            },
            {test: /\.html$/, loader: 'html', include: /src/}
        ]
    },
    postcss: [autoPreFixer({browsers: ['last 100 versions']})]
})
