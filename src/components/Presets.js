import React, { Component, PropTypes } from 'react'
import Subtitle from 'components/styled/Subtitle'
import Button from 'components/styled/Button'

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
        <Subtitle>
          Presets
        </Subtitle>

        <div>
          {Object.keys(presets).map(preset => (
            <Button
              key={preset}
              current={preset === this.state.current}
              onClick={() => {
                this.setState({current: preset})
                setPreset(preset)
              }}>
              {preset}
            </Button>
          ))}
        </div>
      </section>
    ) || null
  }
}

Presets.propTypes = {
  presets: PropTypes.object
}

export default Presets
