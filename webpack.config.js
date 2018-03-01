/*
 * webpack.config.js
 */


const debug = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')

module.exports = {
  context: __dirname,
  devtool: debug ? 'inline-sourcemap' : null,
  entry: './test/main.js',
  output: {
    path: __dirname + '/test',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env', 'babel-preset-react']
          }
        }
      },
      {
        test: /\.css$/,
          loaders: ['style-loader', 'css-loader?importLoaders=1'],
          exclude: ['node_modules']
      },
    ]
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
