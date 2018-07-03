import React from 'react'
import PropTypes from 'prop-types'

import { Custom } from 'src/context'
import { InternalName } from 'src/components/internal/Name'

const mapSpecToArgs = ({ name }) => ({ name })

const Name = ({ children }) => {
  return (
    <Custom>
      {spec => (children ? children(mapSpecToArgs(spec)) : <InternalName {...spec} />)}
    </Custom>
  )
}

Name.propTypes = {
  children: PropTypes.func
}

export { Name }
