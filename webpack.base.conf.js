const path = require('path');

const baseWebpackConfig = {
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  mode: 'production',
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
      {
        test: /.less$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ],
      }
    ],
  },
};

module.exports = baseWebpackConfig;
