import React from 'react'
import PropTypes from 'prop-types'
import classString from 'helpers/class-string'

const Description = ({children: description}) => ((!!description && (
  <section
    className={classString('__description')}>
    {description}
  </section>
)) || null)

Description.propTypes = {
  children: PropTypes.node
}

export default Description
