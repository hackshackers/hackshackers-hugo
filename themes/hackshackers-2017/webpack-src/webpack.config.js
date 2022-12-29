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
    rules: [
        {
          enforce: "pre",
          test: /\.js$/, 
         exclude: /node_modules/,
         loader: "eslint-loader"
        },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader", 
        include: path.resolve(__dirname, 'js'),
      },
     {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'css-loader', 
                options: {
                  plugins: () => [autoprefixer()],
                 sourceMap: true,
                 },
              },
              {
                loader: 'postcss-loader',
                options: {
                  plugins: () => [autoprefixer()],
                 postcssOptions: {
                   parser: "postcss-scss",
                   },
                }
              }, 
              {
                 loader: 'sass-loader',
                 options: {
                      sourceMap: true,
               },
             },

          ]
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
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: 'url-loader' },
    ],

  },
};

module.exports = webpackConfig;
