var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path')

module.exports = [
  {
    name: "browser",
    entry: {
        main: ['babel-polyfill', path.join(__dirname, '../src/main.js')]
    },
    output: {
        path: path.join(__dirname, '../public'),
        filename: 'resources/bundle.js'
    },
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            cacheDirectory: true,
            presets: ['react', 'es2015', 'stage-0'],
            plugins: ['transform-runtime', 'transform-object-assign', 'add-module-exports']
          }
        },
        {
          test: /\.(svg|png|jpg|gif)([\?]?.*)$/,
          exclude: /node_modules/,
          loader: "file-loader?name=images/[name].[ext]"
        },
        {
          test: /\.(eot|woff|woff2|ttf)([\?]?.*)$/,
          exclude: /node_modules/,
          loader: 'url-loader'
        },
        {
        test: /\.(css|scss)$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      }]
    },
    plugins: [
      new ExtractTextPlugin("resources/styles.css"),
      new webpack.LoaderOptionsPlugin({
        debug: true
      }),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("development")
        }
      })
    ],
    externals: {
      "jquery": "jQuery"
    }
  }
];
