const path = require('path');
const webpack = require('webpack');
const manifestPlugin = require('webpack-manifest-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, "src/index.js"),
    },

    output: {
        filename: 'app.[name].[hash].js',
    },

    plugins: [

        new manifestPlugin(),

        new cleanWebpackPlugin(
            ['dist/app.*index.js', 'dist/index.html'],　 
            {
                root: __dirname,
                verbose:true, 
                dry: false
            }
        ),

        new HtmlWebpackPlugin({
            title: 'rxjs demo',
            template: path.resolve(__dirname, "src/index.html"),
        })
    ],

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
      }
}