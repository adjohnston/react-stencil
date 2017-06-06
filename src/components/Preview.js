import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { className } from 'helpers'

export default class Preview extends Component {
  constructor (props) {
    super(props)

    this.state = {
      current: ''
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

    return (
      <div>
        <button
          style={{width: 20, height: 20, background: '', border: '1px solid rgba(0, 0, 0, .5)'}}
          onClick={() => this.setSwatch('')} />

        {swatches.map(swatch => (
          <button
            key={swatch}
            style={{width: 20, height: 20, background: swatch, border: '1px solid rgba(0, 0, 0, .5)'}}
            onClick={() => this.setSwatch(swatch)} />
        ))}

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
