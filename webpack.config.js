var webpack = require('webpack');
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: path.resolve(__dirname, "src"),
        //vendor: ['lodash']
    },
    context: path.resolve(__dirname, 'src'),
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new webpack.ProvidePlugin({
            "_": "lodash",
            //"angular": "angular"//this does not work maybe check NgRequirePlugin
        })
        /*new webpack.optimize.CommonsChunkPlugin({
         name: 'vendor',
         filename: 'vendor.[hash].bundle.js'
         })*/
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.[hash].js"
        //filename: "bundle.[chunkhash].js" use un prod
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css"}
        ]
    }
};

//http://stackoverflow.com/questions/35054082/webpack-how-to-build-production-code-and-how-to-use-it