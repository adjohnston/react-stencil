import React from 'react'
import PropTypes from 'prop-types'
import classString from 'src/helpers/class-string'

const Swatch = ({swatch, isActive, onClick}) => {
  const handleOnClick = () => {
    return onClick(swatch)
  }

  const isActiveClass = isActive ? classString('__swatch-button-active') : null

  return (
    <button
      className={`${classString('__swatch-button')} ${isActiveClass}`}
      style={{
        background: swatch,
        color: swatch
      }}
      onClick={handleOnClick} />
  )
}

Swatch.propTypes = {
  onClick: PropTypes.func.isRequired,
  swatch: PropTypes.string,
  isActive: PropTypes.bool
}

export default Swatch
