import React, { PropTypes } from 'react'

const Presets = ({presets = {}, setPreset}) => (
  <div>
    {Object.keys(presets).map(preset => (
      <button
        key={preset}
        onClick={() => setPreset(presets[preset])}>
        {preset}
      </button>
    ))}
  </div>
)

Presets.propTypes = {
  presets: PropTypes.object
}

export default Presets
