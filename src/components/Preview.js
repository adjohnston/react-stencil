import React from 'react'
import PropTypes from 'prop-types'

import { Custom } from 'src/context'
import { InternalPreview } from 'src/components/internal/Preview'

const Preview = ({ children }) => {
  return (
    <Custom>
      {({ Component }) => (children ? children({ Component }) : <InternalPreview Component={Component} />)}
    </Custom>
  )
}

Preview.propTypes = {
  children: PropTypes.func
}

export { Preview }
