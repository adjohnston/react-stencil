import { resolve } from 'path'

export default {
  entry: resolve(__dirname, 'src/stencil.js'),

  output: {
    filename: 'stencil.js',
    path: resolve(__dirname, 'dist'),
    library: 'stencil',
    libraryTarget: 'umd'
  },

  devtool: 'inline-source-map',

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },

  resolve: {
    alias: {
      helpers: resolve(__dirname, 'src/helpers'),
      components: resolve(__dirname, 'src/components'),
      constants: resolve(__dirname, 'src/constants')
    }
  },

  externals: {
    react: 'react',
    'prop-types': 'prop-types',
    'assign-deep': 'assign-deep'
  }
}
