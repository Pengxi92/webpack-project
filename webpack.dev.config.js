const merge = require('webpack-merge');

const baseWebpackConfig = require('./webpack.base.config');

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  module: {
    rules: [
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
})

module.exports = webpackConfig;
