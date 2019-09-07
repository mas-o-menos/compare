const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlPlugin = require('html-webpack-plugin');
const HtmlInlineSourcePlugin = require('html-webpack-inline-source-plugin');

const getCSSConfig = require('../../build/configs/css');
const getResolveConfig = require('../../build/configs/resolve');
const appConfig = require('./src/config');
const settings = require('./settings');
const pkg = require('./package.json');

const { isProduction } = settings;

module.exports = webpackMerge.smart(
  getCSSConfig(settings),
  getResolveConfig(settings),
  {
    entry: {
      main: [
        './polyfill.js',
        './index.jsx',
      ],
    },
    plugins: [
      new HtmlPlugin({
        template: './index.html',
        filename: 'index.html',
        minimize: isProduction,
        inlineSource: '.(js|css)$',
        ...appConfig,
      }),
      new webpack.DefinePlugin({
        __VERSION__: JSON.stringify(pkg.version),
      }),
      new HtmlInlineSourcePlugin(),
    ],
  },
);
