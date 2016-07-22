// file : ./webpack/dev.config.js
'use strict'


const path = require('path');
module.exports = {
    entry: {
        vendor: ['angular', 'lodash'],
        app: path.resolve('src')
    },
    context: path.resolve('src'),
    devtool: 'inline-source-map',
    plugins: [],
    output: {},
    module: {
        preLoaders: [
            {test: /\.js$/, loader: "source-map"}
        ],
        loaders: [
            {test: /\.js$/, loader: 'babel!eslint', exclude: /node_modules/},
            {test: /\.less$/, loader: 'style!css!less', exclude: /node_modules/},
            {test: /\.html$/, loader: 'html'}
        ]
    }
}