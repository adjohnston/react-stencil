#! /usr/bin/env node

var path = require('path')
var fs = require('fs-extra')
var glob = require('globby')
var program = require('ast-query')
var argv = require('minimist')(process.argv.slice(2), {
  string: ['components', 'specsDir'],
  alias: {
    c: 'components',
    d: 'specsDir'
  },
  default: {
    d: './specs'
  }
})

types = (object) => {
  const names = []
  const recurse = (object) => {
    if (!object.object.name) {
      names.push(object.property.name)
      return recurse(object.object)
    }
  }
  recurse(object)
  return names.reverse()
}

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

        const propTypes = ast
          .assignment(/.*(.propTypes)/)
          .nodes[0]
          .right
          .properties
          .map((prop) => {
            return {[prop.key.name]: types(prop.value)}
          })

        fs.outputFile(path.resolve(argv.d, componentName, 'props.js'), JSON.stringify(propTypes), (err) => {
          if (err) throw err
        })
      })
    })
  })
