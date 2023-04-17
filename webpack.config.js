const path = require('path');
const webpack = require('webpack');
/*const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');*/

module.exports = {
    mode: "development",
    entry: './short-long.js',
    output: {
        filename: 'bundle.dev.js',
        path: path.resolve(__dirname, 'dist'),
        library: "Language_Tools",
        //libraryExport: "default",
        libraryTarget: "this",
        globalObject: "this"
  },  
};