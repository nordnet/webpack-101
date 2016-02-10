module.exports = {
  entry: './about',
  output: {
    filename: 'build.js',
    library: 'app'
  },

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: 'inline-cheap-module-source-map'
};
