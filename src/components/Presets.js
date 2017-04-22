import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { className } from 'helpers'

class Presets extends Component {
  constructor (props) {
    super(props)

    this.state = {
      current: 'default'
    }
  }

  render () {
    const {
      setPreset,
      presets
    } = this.props

    return presets && (
      <section>
        <h2
          className={className('title')}>
          Presets
        </h2>

        <div>
          {Object.keys(presets).map(preset => (
            <button
              key={preset}
              className={[
                className('preset'),
                className('preset', preset === this.state.current && 'current')
              ].join(' ')}
              onClick={() => {
                this.setState({current: preset})
                setPreset(preset)
              }}>
              {preset}
            </button>
          ))}
        </div>
      </section>
    )
  }
}

Presets.propTypes = {
  setPreset: PropTypes.func.isRequired,
  presets: PropTypes.object
}

export default Presets
