const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  module: {
    rules: [
      { test: /\.mjml$/, loader: 'mjml-loader' },
      {
        test: /\.(s*)css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader'},
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, 'node_modules/foundation-emails/scss')]
            }
          },
        ]
      }
    ]
  },
  resolve: {
    alias: {
      foundation: `${__dirname}/node_modules/foundation-emails/scss`
    },
    modules: [path.resolve(__dirname, 'src/'), 'node_modules']
  }
};