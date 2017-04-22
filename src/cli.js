#! /usr/bin/env node

const resolve = require('path').resolve
const inspect = require('util').inspect
const fs = require('fs-extra')
const log = require('single-line-log').stdout
const chalk = require('chalk')
const glob = require('globby')
const reactDocs = require('react-docgen')
const inquirer = require('inquirer')
const helpers = require('./helpers')

let componentCount = 0;
let mapping = ''

const componentTemplate = require('./templates/component')
const mappingTemplate = require('./templates/mapping')

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

// inquirer.prompt([
//   {
//     name: 'c',
//     message: 'Where are your components?',
//     validate: (answer) => answer !== ''
//   },
//   {
//     name: 'd',
//     message: 'Where do you want generated specs to live?',
//     validate: (answer) => answer !== ''
//   },
//   {
//     type: 'confirm',
//     name: 'm',
//     message: 'Do you want to automagically generate component mapping?',
//     default: true
//   }
// ]).then(answers => {
//   const {
//     c,
//     d,
//     m
//   } = answers

const c = 'node_modules/kahoot-components/js/components/'
const d = 'src/spec'
const m = true

  glob(Array.isArray(c) ? c.map(getComponentPaths) : getComponentPaths(c))
    .then((componentPaths) => {
      fs.ensureFile(resolve(d, 'global-definitions.js'), throwErr)

      componentPaths.map(componentPath => {
        const componentPathName = getPathName(componentPath)

        fs.readFile(componentPath, 'utf8', (err, code) => {
          if (err) throw err

          let props
          try { props = reactDocs.parse(code).props }
          catch(e) { return }

          const types = Object.keys(props).reduce((prev, prop) => {
            const {
              type: {name},
              required
            } = props[prop]

            prev[prop] = {props: [name, required]}
            return prev
          })

          fs.ensureFile(resolve(d, componentPathName, 'definitions.js'), throwErr)

          const typesExport = `export default ${inspect(types, false, null)}`
          fs.outputFile(resolve(d, componentPathName, 'types.js'), typesExport, throwErr)

          if (m) {
            const component = componentTemplate(resolve(componentPath))
            const path = resolve(d, componentPathName, 'component.js')
            const componentName = getComponentName(componentPathName)

            mapping += mappingTemplate(componentName, resolve(d, componentPathName, 'component'))

            fs.outputFile(path, component, throwErr)
            fs.outputFile(resolve(d, 'components.js'), mapping, throwErr)
          }
        })
      })
    })
})
