const R = require('ramda')
const path = require('path')

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
const getPathName = (p) => {
  const bN = path.basename(p).split('.')
  if (bN.length > 1)
    return bN[0]
  throw new Error(`path ${p} must include component file`)
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
  splitOnHyphen,
  upperCaseWords,
  joinChars,
  getPathName,
  getComponentName
}
