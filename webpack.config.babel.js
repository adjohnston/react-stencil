import { resolve } from 'path'

export default {
  entry: {
    Reactionary: resolve(__dirname, 'src/Reactionary.js'),
    cli: resolve(__dirname, 'src/cli.js')
  },

  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dist'),
    libraryTarget: 'umd'
  },

  devtool: 'inline-source-map',

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /src\/cli.js$/,
      loader: 'node-loader'
    }]
  },

  resolve: {
    alias: {
      helpers: resolve(__dirname, 'src/helpers.js'),
      components: resolve(__dirname, 'src/components')
    }
  }
}
