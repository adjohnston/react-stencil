import React from 'react'
import PropTypes from 'prop-types'
import classString from 'helpers/class-string'
import constants from 'constants/status'

const Status = ({status}) => ((!!status && (
  <span
    className={`${classString('__status')} ${classString(`__status--${constants[status].className}`)}`}>
    {constants[status].text}
  </span>
)) || null)

Status.propTypes = {
  status: PropTypes.oneOf(
    ['DANGEROUS', 'WIP', 'READY']
  )
}

export default Status
