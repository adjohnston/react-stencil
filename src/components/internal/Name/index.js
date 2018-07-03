import React from 'react'
import PropTypes from 'prop-types'

const Name = ({ name }) => {
  return <h1>{name}</h1>
}

Name.propTypes = {
  name: PropTypes.string.isRequired
}

export { Name as InternalName }
