var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HHCleanup = require('./plugins/HHCleanup');
const autoprefixer = require('autoprefixer');

var webpackConfig = {
  watch: !!process.env.WATCH,
  entry: {
    app: ['whatwg-fetch', './webpack-src/js/loader.js'],
    styles: './webpack-src/sass/screen.scss',
  },
  output: {
    path: path.resolve(__dirname, '../static/lib/'),
    publicPath: '',
    filename: '[name].js',
    jsonpFunction: 'hackshackersJsonp'
  },
  plugins: [
    new ExtractTextPlugin('[name].css'),
  ],
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'eslint', exclude: /node_modules/ },
    ],
    loaders: [
      {
        loader: 'babel',
        test: /\.js$/,
        include: path.resolve(__dirname, 'js'),
      },
      {
        loader: ExtractTextPlugin.extract('style-loader', 'css?-autoprefixer&sourceMap!postcss?parser=postcss-scss!sass?sourceMap'),
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
  },
  postcss: [ autoprefixer({ browsers: ['last 4 versions'] }) ]
};

module.exports = webpackConfig;
