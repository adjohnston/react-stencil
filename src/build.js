#! /usr/bin/env node

const path = require('path')
const fs = require('fs-extra')
const glob = require('globby')
const program = require('ast-query')
const argv = require('minimist')(process.argv.slice(2), {
  string: ['components', 'specsDir'],
  alias: {
    c: 'components',
    d: 'specsDir'
  },
  default: {
    d: './specs'
  }
})

const getValues = (object) => {
  const value = []
  const recurse = (object) => {
    if (object.object && !object.object.name) {
      value.push(object.property.name)
      return recurse(object.object)
    }
  }
  recurse(object)
  return {type: value.reverse()}
}

const getTypes = (ast, regex) => {
  const nodes = ast.assignment(regex).nodes[0]

  return nodes && nodes
    .right
    .properties
    .map((prop) => {
      return {[prop.key.name]: getValues(prop.value)}
    })
    .reduce((p, n) => {
      return Object.assign(p, n)
    }, {}) || {}
}

glob(`${argv.c}/**/*.?(js|jsx)`)
  .then((components) => {
    components.map(c => {
      const componentName = path.basename(c).split('.')[0]

      fs.readFile(c, 'utf8', (err, code) => {
        if (err) throw err

        try {
          const ast = program(code, null, {
            sourceType: 'module',
            plugins: { jsx: true }
          })

          const propTypes = getTypes(ast, /.*(.propTypes)/)
          const contextTypes = getTypes(ast, /.*(contextTypes)/)
          const childContextTypes = getTypes(ast, /.*(.childContextTypes)/)

          const output = (
            `export default ${JSON.stringify({types: {propTypes, contextTypes, childContextTypes}})}`
          )

          fs.outputFile(path.resolve(argv.d, componentName, 'types.js'), output, (err) => {
            if (err) throw err
          })
        } catch(e) {
          console.log(`could not get types from ${componentName}. This is most likely due to the component using the spread operator which is not seem to be supported by Acorn or Acorn JSX.`);
        }
      })
    })
  })
