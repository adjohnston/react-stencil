#! /usr/bin/env node

const helpers = require('./helpers')
const path = require('path')
const inspect = require('util').inspect
const fs = require('fs-extra')
const glob = require('globby')
const reactDocs = require('react-docgen')
const inquirer = require('inquirer')

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
]).then(answers => console.log(answers))

// const {
//   getPathName,
//   getComponentName
// } = helpers
//
// const throwErr = (err) => {
//   if (err) throw err
// }
//
// const getComponentPaths = c => {
//   return `${c}/**/*.?(js|jsx)`
// }
//
// glob(Array.isArray(argv.c) ? argv.c.map(getComponentPaths) : getComponentPaths(argv.c))
//   .then((componentPaths) => {
//     fs.ensureFile(path.resolve(argv.d, 'global-definitions.js'), throwErr)
//
//     componentPaths.map(componentPath => {
//       const componentPathName = getPathName(componentPath)
//
//       fs.readFile(componentPath, 'utf8', (err, code) => {
//         if (err) throw err
//
//         fs.ensureFile(path.resolve(argv.d, componentPathName, 'definitions.js'), throwErr)
//
//         let props
//         try {
//           props = reactDocs.parse(code).props
//         } catch(e) {
//           console.log(`Could not parse component ${componentPathName}`)
//         }
//
//         const types = Object.keys(props).reduce((prev, prop) => {
//           const {
//             type: {name},
//             required
//           } = props[prop]
//
//           prev[prop] = {props: [name, required]}
//           return prev
//         }, {});
//
//         const typesExport = (
//           `export default ${inspect(types, false, null)}`
//         )
//
//         fs.outputFile(path.resolve(argv.d, componentPathName, 'types.js'), typesExport, throwErr)
//
//         if (argv.m) {
//           const component = `
//             import React from 'react'
//             import Reactionary, {specify} from '@adjohnston/reactionary'
//             import c from '${path.resolve(componentPath)}'
//             import gD from '../global-definitions'
//             import t from './types'
//             import d from './definitions'
//             const s = specify(gD || {}, t || {}, d || {})
//             export default Reactionary(s)(c)
//           `
//
//           fs.outputFile(path.resolve(argv.d, componentPathName, 'component.js'), component, throwErr)
//         }
//       })
//     })
//
//     if (argv.m) {
//       const mapping = new Promise((res, rej) => {
//         res(componentPaths.reduce((prev, componentPath) => {
//           const componentPathName = getPathName(componentPath)
//           const componentName = getComponentName(componentPathName)
//
//           return (
//             prev += `import ${componentName} from '${path.resolve(argv.d, componentPathName, 'component')}';
//             export {${componentName}};\n`
//           )
//         }, ''))
//       }).then((map) => {
//         fs.outputFile(path.resolve(argv.d, 'components.js'), map, throwErr)
//       })
//     }
//   })
