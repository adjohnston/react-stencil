import React from 'react'
import PropTypes from 'prop-types'
import className from 'helpers/class-name'

const Swatch = ({swatch, onClick}) => {
  const handleOnClick = () => {
    return onClick(swatch)
  }

  return (
    <button
      className={className('swatch-button')}
      style={{background: swatch}}
      onClick={handleOnClick} />
  )
}

Swatch.propTypes = {
  onClick: PropTypes.func.isRequired,
  swatch: PropTypes.string
}

export default Swatch
