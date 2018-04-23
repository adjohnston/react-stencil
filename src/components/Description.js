import React from 'react'
import PropTypes from 'prop-types'
import classString from 'src/helpers/class-string'

const FallbackTemplate = (description) => (!!description && (
  <section
    className={classString('__description')}>
    {description}
  </section>
)) || null

const Description = ({children, description}) => (
  (children && description)
    ? children(description)
    : FallbackTemplate(description)
)

Description.propTypes = {
  children: PropTypes.func,
  description: PropTypes.node
}

FallbackTemplate.propsTypes = {
  description: PropTypes.node.isRequired
}

export default Description
