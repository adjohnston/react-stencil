import React from 'react'
import PropTypes from 'prop-types'
import classString from 'src/helpers/class-string'

const FallbackTemplate = (component, currentSwatch) => (!!component && (
  <div
    style={(!!currentSwatch && { background: currentSwatch }) || null}
    className={classString('__preview')}>
    {component}
  </div>
)) || null

const Preview = ({ children, component, currentSwatch }) => (
  (children && component)
    ? children(component, currentSwatch)
    : FallbackTemplate(component, currentSwatch)
)

Preview.propTypes = {
  children: PropTypes.func,
  component: PropTypes.object
}

FallbackTemplate.propTypes = {
  component: PropTypes.element.isRequired,
  currentSwatch: PropTypes.string
}

export default Preview
