import React from 'react'
import PropTypes from 'prop-types'
import classString from 'helpers/class-string'

const Swatch = ({swatch, onClick}) => {
  const handleOnClick = () => {
    return onClick(swatch)
  }

  return (
    <button
      className={classString('__swatch-button')}
      style={{background: swatch}}
      onClick={handleOnClick} />
  )
}

Swatch.propTypes = {
  onClick: PropTypes.func.isRequired,
  swatch: PropTypes.string
}

export default Swatch
