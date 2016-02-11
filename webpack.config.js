var webpack = require('webpack');
var NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: './about',
  output: {
    filename: 'build.js',
    library: 'app'
  },

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: NODE_ENV === 'development' ? 'inline-cheap-module-source-map' : null,

  resolve: {
    modulesDirectories: ['node_modules'],
    extentions: ['', '.js']
  },

  resolveLoader: {
    modulesDirectories: ['node_modules'],
    moduleTemplates: ['*-loader'],
    extentions: ['', '.js']
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }],
  },

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true,
      }
    }),
    new webpack.NoErrorsPlugin(),
  ]
};
