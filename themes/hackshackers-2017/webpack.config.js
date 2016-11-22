var fs = require('fs-extra');
var path = require('path');

var webpackConfig = {
  watch: !!process.env.WATCH,
  entry: [
    './client/js/loader.js',
    './client/sass/screen.scss'
  ],
  output: {
    path: path.join(__dirname, '/static/js'),
    publicPath: '',
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/
      },
      {
        loaders: ['style', 'css', 'sass'],
        test: /\.scss$/
      },
      {
        test: /\.png$/,
        loader: 'url',
        query: {
          limit: 10000,
          mimetype: 'image/png'
        }
      },
      {
        test: /\.jpg$/,
        loader: 'url',
        query: {
          limit: 10000,
          mimetype: 'image/jpg'
        }
      },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  }
};

module.exports = webpackConfig;
