var webpack = require('webpack');

const config = require('./webpack.config');

const nodeEnv = new webpack.DefinePlugin({
  'process.env': {
    'NODE_ENV': JSON.stringify('production')
  }
});

(config.plugins) ? config.plugins.push(nodeEnv) : config.plugins = [nodeEnv];

module.exports = config;
