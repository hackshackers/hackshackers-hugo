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
    new ExtractTextPlugin({filename:'[name].css'}),
  ],
  module: {

    rules: [
      { test: /\.js$/, use: 'eslint-loader', enforce: "pre", exclude: /node_modules/ },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        use: 'babel-loader',
        test: /\.js$/,
        include: path.resolve(__dirname, 'js'),
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          // use: [{
        //     loader: 'css-loader',
        //     options: {autoprefixer: false, sourceMap: false}
        //   },
        //   {
        //     loader: 'postcss?parser=postcss-scss',
        //     options: {sourceMap: true, scss: false}
        //   }
        // ]
          use: "css?-autoprefixer&sourceMap!postcss?parser=postcss-scss!sass?sourceMap"
        })

      },
      {
        test: /\.png$/,
        use: [{
          loader: 'url-loader',
          query: {
            limit: 10000,
            mimetype: 'image/png'
          }
        }

        ]
      },
      {
        test: /\.jpg$/,
        use:
        [ {
          loader: 'url-loader',
          query: {
            limit: 10000,
            mimetype: 'image/jpg'
          }
        }

        ]
      },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: 'url-loader?limit=100000' },

    ],

  },
};

module.exports = webpackConfig;
