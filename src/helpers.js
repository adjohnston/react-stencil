const R = require('ramda')
const path = require('path')

//    className : string -> string -> string
const className = (el, mod) => {
  return `rctnry${el ? `__${el}` : ''}${mod ? `--${mod}` : ''}`
}

//    splitOnHyphen : string -> array
const splitOnHyphen = (str) => {
  return R.split('-', str)
}

//    upperCaseWords : array -> array
const upperCaseWords = (words) => {
  return R.map(word => word.toUpperCase(), words)
}

//    joinChars : array -> string
const joinChars = (chars) => {
  return R.join('', chars)
}

//    getPathName : string -> string
const getPathName = (componentPath) => {
  const pathName = path.basename(componentPath).split('.')

  if (pathName.length > 1) return pathName[0]
  throw new Error(`path ${componentPath} must include component file`)
}

//    getComponentName : string -> string
const getComponentName = (componentPathName) => (
  R.pipe(
    splitOnHyphen,
    upperCaseWords,
    joinChars
  )(componentPathName)
)

module.exports = {
  className,
  splitOnHyphen,
  upperCaseWords,
  joinChars,
  getPathName,
  getComponentName
}
