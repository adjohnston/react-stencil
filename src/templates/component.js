module.exports = (componentPath) => (
  `import React from 'react'
  import Reactionary, {specify} from '@adjohnston/reactionary'
  import c from '${componentPath}'
  import gD from '../global-definitions'
  import t from './types'
  import d from './definitions'
  const s = specify(gD || {}, t || {}, d || {})
  export default Reactionary(s)(c)`
)
