const path = require('path');
const { env } = require('process');
const webpack = require('webpack');
/*const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');*/


module.exports = (env, argv) => {
    let filename;
    switch (env.mode) {
      case "development":
        filename = "dev"
        break;
      case "production":
        filename = "prod";
        break;
      default:
        filename = "testing"
        break;
    }

    return {
      mode: env.mode,
      entry: './index.js',
      output: {
          filename: `bundle.${filename}.js`,
          path: path.resolve(__dirname, 'dist'),
          library: "Language_Tools",
          //libraryExport: "default",
          libraryTarget: "this",
          globalObject: "this"
      }
    }
};