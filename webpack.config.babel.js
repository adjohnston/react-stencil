import { resolve } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  entry: resolve(__dirname, 'src/index.js'),

  output: {
    filename: 'bundle.js',
    path: resolve(__dirname, 'dist')
  },

  devtool: 'eval',

  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, 'src/index.html')
    })
  ],

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },

  resolve: {
    alias: {
      components: resolve(__dirname, 'src/components')
    }
  }
}
