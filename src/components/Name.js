import React from 'react'
import PropTypes from 'prop-types'
import classString from 'src/helpers/class-string'

const FallbackTemplate = (name) => (!!name && (
  <h1
    className={`${classString('__name')}`}>
    {name}
  </h1>
)) || null

const Name = ({children, name}) => (
  (children && name)
    ? children(name)
    : FallbackTemplate(name)
)

Name.propTypes = {
  children: PropTypes.func,
  name: PropTypes.string
}

FallbackTemplate.propTypes = {
  name: PropTypes.string.isRequired
}

export default Name
