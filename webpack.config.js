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
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};
