#! /usr/bin/env node

const helpers = require('./helpers')
const path = require('path')
const fs = require('fs-extra')
const glob = require('globby')
const reactDocs = require('react-docgen')
const argv = require('minimist')(process.argv.slice(2), {
  string: ['components', 'specsDir', 'mapping'],
  alias: {
    c: 'components',
    d: 'specsDir',
    m: 'mapping'
  },
  default: {
    d: './specs'
  }
})

const {
  getPathName,
  getComponentName
} = helpers

const throwErr = (err) => {
  if (err) throw err
}

glob(`${argv.c}/**/*.?(js|jsx)`)
  .then((componentPaths) => {
    fs.ensureFile(path.resolve(argv.d, 'global-definitions.js'), throwErr)

    componentPaths.map(componentPath => {
      const componentPathName = getPathName(componentPath)

      fs.readFile(componentPath, 'utf8', (err, code) => {
        if (err) throw err

        fs.ensureFile(path.resolve(argv.d, componentPathName, 'definitions.js'), throwErr)

        const props = reactDocs.parse(code).props
        const types = Object.keys(props).reduce((prev, prop) => {
          const {
            type: {name},
            required
          } = props[prop]

          prev[prop] = {props: [name, required]}
          return prev
        }, {});

        const typesJSON = (
          `export default ${JSON.stringify({types}, null, 2)}`
        )

        fs.outputFile(path.resolve(argv.d, componentPathName, 'types.js'), typesJSON, throwErr)

        if (argv.m) {
          const component = `
            import React from 'react'
            import Reactionary, {specify} from '@adjohnston/reactionary'
            import c from '${path.resolve(componentPath)}'
            import gD from '../global-definitions'
            import t from './types'
            import d from './definitions'
            const s = specify(gD || {}, t || {}, d || {})
            export default Reactionary(s)(c)
          `

          fs.outputFile(path.resolve(argv.d, componentPathName, 'component.js'), component, throwErr)
        }
      })
    })

    if (argv.m) {
      const mapping = new Promise((res, rej) => {
        res(componentPaths.reduce((prev, componentPath) => {
          const componentPathName = getPathName(componentPath)
          const componentName = getComponentName(componentPathName)

          return (
            prev += `import ${componentName} from '${path.resolve(argv.d, componentPathName, 'component')}';
            export {${componentName}};`
          )
        }, ''))
      }).then((map) => {
        fs.outputFile(path.resolve(argv.d, 'components.js'), map, throwErr)
      })
    }
  })
