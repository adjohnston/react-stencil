import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Presets extends Component {
  constructor(props) {
    super(props)

    this.state = {
      current: 'default'
    }
  }

  render() {
    const {
      setPreset,
      presets
    } = this.props

    return presets && (
      <section>
        <h2>
          Presets
        </h2>

        <div>
          {Object.keys(presets).map(preset => (
            <button
              key={preset}
              current={preset === this.state.current}
              onClick={() => {
                this.setState({current: preset})
                setPreset(preset)
              }}>
              {preset}
            </button>
          ))}
        </div>
      </section>
    ) || null
  }
}

Presets.propTypes = {
  setPreset: PropTypes.func.isRequired,
  presets: PropTypes.object
}

export default Presets
