import React from 'react'

import { Custom } from 'src/context'
import { InternalPreview } from 'src/components/internal/Preview'

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
