import React from 'react'
import PropTypes from 'prop-types'

import { Custom } from '../context'
import { InternalPropsList } from './internal/PropsList'

const PropsList = ({ children }) => {
  return (
    <Custom>
      {({ props }) =>
        children ? (
          children({ props })
        ) : (
          <InternalPropsList props={props} />
        )
      }
    </Custom>
  )
}

export { PropsList }
