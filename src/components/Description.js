import React from 'react'
import PropTypes from 'prop-types'
import classString from 'src/helpers/class-string'

const Description = ({children: description}) => ((!!description && (
  <section
    className={`${classString('__section')} ${classString('__section--slim')} ${classString('__component-description')}`}>
    {description}
  </section>
)) || null)

Description.propTypes = {
  children: PropTypes.node
}

export default Description
