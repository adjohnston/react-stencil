import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classString from 'src/helpers/class-string'
import HeadingAnchor from 'src/components/HeadingAnchor'
import Swatch from 'src/components/Swatch'

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
    if (swatches && swatches.length > 0) {
      swatchButtons = (
        <div
          className={classString('__swatch-list')}>
          <Swatch
            swatch={null}
            isActive={current === null}
            onClick={this.setSwatch} />

          {swatches.map(swatch => (
            <Swatch
              key={swatch}
              swatch={swatch}
              isActive={current === swatch}
              onClick={this.setSwatch} />
          ))}
        </div>
      )
    }

    return (
      <section
        className={classString('__section')}>
        <h2
          className={classString('__heading')}>
          <HeadingAnchor
            anchorId='preview' />
          Preview
        </h2>

        {swatchButtons}

        <div
          style={{background: current}}
          className={classString('__preview')}>
          {Component}
        </div>
      </section>
    )
  }
}

Preview.propTypes = {
  children: PropTypes.element.isRequired,
  swatches: PropTypes.arrayOf(PropTypes.string)
}
