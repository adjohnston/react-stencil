import postcss from 'rollup-plugin-postcss'
import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import { uglify } from 'rollup-plugin-uglify'
import cssnano from 'cssnano'

export default {
  input: 'src/stencil.js',

  output: {
    file: 'bundle.js',
    name: 'ReactStencil',

    globals: {
      react: 'React',
      'prop-types': 'PropTypes',
    },
  },

  plugins: [
    postcss({
      modules: {
        generateScopedName: '[folder]-[local]-[hash:4]',
      },
      plugins: [
        cssnano({
          preset: 'default',
        }),
      ],
    }),
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
    replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    commonjs(),
    uglify(),
  ],

  external: ['react', 'prop-types'],
}
