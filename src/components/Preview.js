import React, { Component } from 'react'
import PropTypes from 'prop-types'
import className from 'helpers/class-name'

export default class Preview extends Component {
  constructor (props) {
    super(props)

    this.state = {
      current: null
    }

    this.setSwatch = this.setSwatch.bind(this)
  }

  setSwatch (swatch) {
    this.setState({
      current: swatch
    })
  }

  render () {
    const current = this.state.current
    const {
      swatches,
      children: Component
    } = this.props

    let swatchButtons
    if (swatches.length > 0) {
      swatchButtons = (
        <div>
          <button
            className={className('swatch-button')}
            onClick={() => this.setSwatch(null)} />

          {swatches.map(swatch => (
            <button
              key={swatch}
              className={className('swatch-button')}
              style={{background: swatch}}
              onClick={() => this.setSwatch(swatch)} />
          ))}
        </div>
      )
    }

    return (
      <div>
        {swatchButtons}

        <div
          style={{background: current}}
          className={className('preview')}>
          {Component}
        </div>
      </div>
    )
  }
}

Preview.propTypes = {
  children: PropTypes.element.isRequired,
  swatches: PropTypes.arrayOf(PropTypes.string)
}
