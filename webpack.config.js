module.exports = {
  entry: {
    main: ['./_react/index.js']
  },
  output: {
    path: __dirname + '/assets/js',
    filename: 'react_bundle.js'
  },
  module: {
    loaders: [
      {
        key: 'jsx',
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ['babel']
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
