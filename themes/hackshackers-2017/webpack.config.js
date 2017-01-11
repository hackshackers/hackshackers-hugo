var path = require('path');

var webpackConfig = {
  watch: !!process.env.WATCH,
  entry: [
    'whatwg-fetch',
    './webpack-src/js/loader.js',
    './webpack-src/sass/screen.scss'
  ],
  output: {
    path: path.join(__dirname, '/static/js/'),
    publicPath: '',
    filename: 'index_bundle.js',
    jsonpFunction: 'hackshackersJsonp'
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'eslint', exclude: /node_modules/ },
    ],
    loaders: [
      {
        loader: 'babel',
        test: /\.js$/,
        include: path.join(__dirname, 'webpack-src/js'),
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
