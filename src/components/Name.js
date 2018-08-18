import React from 'react'

import { Custom } from '../context'
import { InternalName } from './internal/Name'

const Name = ({ children }) => {
  return (
    <Custom>
      {({ name }) =>
        children ? children({ name }) : <InternalName name={name} />
      }
    </Custom>
  )
}

export { Name }
