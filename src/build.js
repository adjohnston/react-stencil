#! /usr/bin/env node

var fs = require('fs')
var glob = require('globby')
var argv = require('minimist')(process.argv.slice(2), {
  string: 'components',
  alias: {
    c: 'components'
  }
})

glob(`${argv.c}/**/*.?(js|jsx)`)
  .then((paths) => {
    debugger
    paths
  })
