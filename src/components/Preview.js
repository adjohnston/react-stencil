import React from 'react'

import { Custom } from '../context'
import { InternalPreview } from './internal/Preview'

const Preview = ({ children }) => {
  return (
    <Custom>
      {({ Component }) =>
        children ? (
          children({ Component })
        ) : (
          <InternalPreview Component={Component} />
        )
      }
    </Custom>
  )
}

export { Preview }
