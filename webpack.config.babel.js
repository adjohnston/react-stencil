import { resolve } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  entry: resolve(__dirname, 'src/Doc.js'),

  output: {
    filename: 'Doc.min.js',
    library: 'Doc',
    path: resolve(__dirname, 'dist')
  },

  devtool: 'inline-source-map',

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.ya?ml$/,
      loader: 'yml-loader'
    }]
  },

  resolve: {
    alias: {
      components: resolve(__dirname, 'src/components')
    }
  }
}
