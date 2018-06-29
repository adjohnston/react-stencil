import React from 'react'
import { Custom } from '../context'

export default ({ children }) =>
  <Custom>
    { spec => children ? children(spec.name) : <h1>{spec.name}</h1> }
  </Custom>
