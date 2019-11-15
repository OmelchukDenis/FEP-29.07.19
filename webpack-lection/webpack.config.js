var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
          {
            test: /\.css$/,
            use: [
              // style-loader
              { loader: 'style-loader' },
              // css-loader
              {
                loader: 'css-loader',
                options: {
                  modules: true
                }
              },
            ]
          }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};