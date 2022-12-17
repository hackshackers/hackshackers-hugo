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
//      {
//       test: /\.(sass|less|css)$/,
//        use: ["style-loader", "css-loader", "less-loader", "postcss-loader"],
//      },
  {
        test: /\.(sass|css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [
                require("autoprefixer")()
              ],
            },
          },
          'sass-loader',
        ]
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
//        // todo: it works with just css-loader, but the page is messed up. when i add the string of css?-autoprefix.... it breaks because of missing dependency. i suspect that if i can find what is the missing dependency it will work. could there be some sort of a dependency that i am missing and didnt declare earlier in the file? 
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
