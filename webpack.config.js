module.exports = {
  entry: './about',
  output: {
    filename: 'build.js',
    library: 'app'
  },

  watch: true,

  watchOptions: {
    aggregateTimeout: 100
  },

  devtool: 'inline-cheap-module-source-map'
};
