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
  // mode: 'production',
  mode: 'development',
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
  devServer: {
    // port: 8082,
    hot: true,
    contentBase: './dist',
    host: 'test.m.iqiyi.com',
		port: '9393'
  },
};

module.exports = baseWebpackConfig;
