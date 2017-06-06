import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { className } from 'helpers'

export default class Preview extends Component {
  constructor (props) {
    super(props)

    this.state = {
      currentSwatch: ''
    }

    this.setSwatch = this.setSwatch.bind(this)
  }

  setSwatch (swatch) {
    this.setState({
      currentSwatch: swatch
    })
  }

  render () {
    const swatches = this.props.swatches
    const currentSwatch = this.state.currentSwatch

    return (
      <div>
        <button
          style={{width: 20, height: 20, background: '', border: '1px solid rgba(0, 0, 0, .5)'}}
          onClick={() => this.setSwatch('')} />

        {swatches.map(swatch => (
          <button
            style={{width: 20, height: 20, background: swatch, border: '1px solid rgba(0, 0, 0, .5)'}}
            onClick={() => this.setSwatch(swatch)} />
        ))}

        <div
          style={{background: currentSwatch}}
          className={className('preview')}>
          {Component}
        </div>
      </div>
    )
  }
}

Preview.propTypes = {
  swatches: PropTypes.arrayOf(PropTypes.string)
}
