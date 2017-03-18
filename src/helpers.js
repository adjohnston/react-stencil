const path = require('path')

const getPathName = (p) => {
  const bN = path.basename(p).split('.')
  if (bN.length > 1)
    return bN[0]
  throw new Error(`path ${p} must include component file`)
}

module.exports = {
  getPathName
}
