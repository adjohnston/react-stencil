import { resolve } from 'path'

export default {
  entry: resolve(__dirname, 'src/stencil.js'),

  output: {
    filename: 'stencil.js',
    path: resolve(__dirname, 'dist'),
    library: 'react-stencil',
    libraryTarget: 'umd',
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }],
  },

  resolve: {
    alias: {
      src: resolve(__dirname, 'src'),
    },
  },

  externals: {
    react: 'react',
    'prop-types': 'prop-types',
  },
}
