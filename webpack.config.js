const path = require('path')

module.exports = {

  // Input
  entry: path.join(__dirname, 'src'),

  // Output
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  // Transformations
  module: {
    loaders: [{
      test: /\.vue$/i,
      loader: 'vue-loader',
      options: {
        loaders: { js: 'babel-loader' }
      }
    }, {
      test: /\.js$/i,
      loader: 'babel-loader',
      options: {
        presets: ['env'],
      }
    }, {
      test: /\.sass$/i,
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
    }]
  },

  // Sourcemaps
  devtool: 'source-map',

  // Server
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    historyApiFallback: true,
  },

}