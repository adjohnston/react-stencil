import React from 'react'
import PropTypes from 'prop-types'

const Preview = ({ Component }) => {
  return (
    <section>
      <Component />
    </section>
  )
}

Preview.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element,
  ]).isRequired,
}

export { Preview as InternalPreview }
