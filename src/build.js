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

types = (object) => {
  const names = []
  const recurse = (object) => {
    if (object.object && !object.object.name) {
      names.push(object.property.name)
      return recurse(object.object)
    }
  }
  recurse(object)
  return names.reverse()
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
            ecmaVersion: 7,
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
        } catch(e) {
          console.log(`could not get propTypes from ${componentName}. This is most likely due to the component using the spread operator which does not seem to be supported by Acorn or Acorn JSX.`);
        }
      })
    })
  })
