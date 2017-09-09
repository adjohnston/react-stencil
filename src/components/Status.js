import React from 'react'
import PropTypes from 'prop-types'
import classString from 'src/helpers/class-string'
import constants from 'src/constants/status'

const FallbackTemplate = (status) => (!!status && (
  <span
    className={`${classString('__status')} ${classString(`__status--${constants[status].className}`)}`}>
    {constants[status].text}
  </span>
)) || null

const Status = ({children, status}) => (
  (children && status)
    ? children(status)
    : FallbackTemplate(status)
)

Status.propTypes = {
  children: PropTypes.func,
  status: PropTypes.oneOf(
    ['DANGEROUS', 'WIP', 'READY']
  )
}

FallbackTemplate.propTypes = {
  status: PropTypes.string.isRequired
}

export default Status
