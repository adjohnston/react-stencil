#! /usr/bin/env node

const helpers = require('./helpers')
const resolve = require('path').resolve
const inspect = require('util').inspect
const fs = require('fs-extra')
const glob = require('globby')
const reactDocs = require('react-docgen')
const inquirer = require('inquirer')

const {
  getPathName,
  getComponentName
} = helpers

const throwErr = (err) => {
  if (err) throw err
}

const getComponentPaths = c => {
  return `${c}/**/*.?(js|jsx)`
}

inquirer.prompt([
  {
    name: 'c',
    message: 'Where are your components?',
    validate: (answer) => answer !== ''
  },
  {
    name: 'd',
    message: 'Where do you want generated specs to live?',
    validate: (answer) => answer !== ''
  },
  {
    type: 'confirm',
    name: 'm',
    message: 'Do you want to automagically generate component mapping?',
    default: true
  }
]).then(answers => {
  const {
    c,
    d,
    m
  } = answers

  glob(Array.isArray(c) ? c.map(getComponentPaths) : getComponentPaths(c))
    .then((componentPaths) => {
      fs.ensureFile(resolve(d, 'global-definitions.js'), throwErr)

      componentPaths.map(componentPath => {
        const componentPathName = getPathName(componentPath)

        fs.readFile(componentPath, 'utf8', (err, code) => {
          if (err) throw err

          fs.ensureFile(resolve(d, componentPathName, 'definitions.js'), throwErr)

          let props
          try {
            props = reactDocs.parse(code).props
          } catch(e) {
            console.log(`Could not parse component ${componentPathName}`)
          }

          const types = Object.keys(props).reduce((prev, prop) => {
            const {
              type: {name},
              required
            } = props[prop]

            prev[prop] = {props: [name, required]}
            return prev
          }, {});

          const typesExport = (
            `export default ${inspect(types, false, null)}`
          )

          fs.outputFile(resolve(d, componentPathName, 'types.js'), typesExport, throwErr)

          if (m) {
            const path = resolve(d, componentPathName, 'component.js')
            const component = componentTemplate(resolve(componentPath))

            fs.outputFile(path, component, throwErr)
          }
        })
      })

      if (m) {
        const mapping = new Promise((res, rej) => {
          res(componentPaths.reduce((prev, componentPath) => {
            const componentPathName = getPathName(componentPath)
            const componentName = getComponentName(componentPathName)

            return (
              prev += `import ${componentName} from '${resolve(d, componentPathName, 'component')}';
              export {${componentName}};\n`
            )
          }, ''))
        }).then((map) => {
          fs.outputFile(resolve(d, 'components.js'), map, throwErr)
        })
      }
    })
})
