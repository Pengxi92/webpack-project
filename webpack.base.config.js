const path = require('path');

const baseWebpackConfig = {
  entry: {
    index: './src/index.js',
    main: './src/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
};

module.exports = baseWebpackConfig;