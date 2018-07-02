import React from 'react'
import { Custom } from '../context'

const Name = ({ children }) =>
  <Custom>
    { spec => children ? children(spec.name) : <h1>{spec.name}</h1> }
  </Custom>

export default Name
