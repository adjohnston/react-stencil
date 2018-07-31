import React from 'react'
import PropTypes from 'prop-types'

import { Custom } from 'src/context'
import { InternalName } from 'src/components/internal/Name'

const Name = ({ children }) => {
  return (
    <Custom>
      {({ name }) => (children ? children({ name }) : <InternalName name={name} />)}
    </Custom>
  )
}

Name.propTypes = {
  children: PropTypes.func
}

export { Name }
