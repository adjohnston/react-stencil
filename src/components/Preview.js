import React from 'react'
import PropTypes from 'prop-types'
import classString from 'src/helpers/class-string'

const FallbackTemplate = (component) => (!!component && (
  <div
    className={classString('__preview')}>
    {component}
  </div>
)) || null

const Preview = ({children, component}) => (
  (children && component)
    ? children(component)
    : FallbackTemplate(component)
)

Preview.propTypes = {
  children: PropTypes.func,
  component: PropTypes.object
}

export default Preview
