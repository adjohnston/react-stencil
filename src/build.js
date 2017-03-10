#! /usr/bin/env node

var path = require('path')
var fs = require('fs-extra')
var glob = require('globby')
var program = require('ast-query')
var argv = require('minimist')(process.argv.slice(2), {
  string: 'components',
  alias: {
    c: 'components'
  }
})

glob(`${argv.c}/**/*.?(js|jsx)`)
  .then((components) => {
    const comp = components.slice(0, 1)

    comp.map(c => {
      const componentName = path.basename(c).split('.')[0]

      fs.readFile(c, 'utf8', (err, data) => {
        if (err) throw err

        const ast = program(data, null, {
          sourceType: 'module',
          plugins: { jsx: true }
        })

        ast
          .assignment(/.*(.propTypes)/)
          .nodes[0]
          .right
          .properties
          .map((prop) => {
            return {[prop.key.name]: prop.value}
          })

        fs.outputFile(path.resolve(__dirname, 'specs', componentName, 'prop-types.js'), JSON.stringify(ast), (err) => {
          if (err) throw err
        })
      })
    })
  })
