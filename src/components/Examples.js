import React, { Component } from 'react'
import PropTypes from 'prop-types'
import className from 'helpers/class-name'

class Examples extends Component {
  constructor (props) {
    super(props)

    this.state = {
      current: 'default'
    }
  }

  render () {
    const {
      setExample,
      examples
    } = this.props

    return (examples && (
      <section>
        <h2
          className={className('title')}>
          Examples
        </h2>

        <div>
          {Object.keys(examples).map(example => (
            <button
              key={example}
              className={[
                className('example'),
                className('example', example === this.state.current && 'current')
              ].join(' ')}
              onClick={() => {
                this.setState({current: example})
                setExample(example)
              }}>
              {example}
            </button>
          ))}
        </div>
      </section>
    )) || null
  }
}

Examples.propTypes = {
  setExample: PropTypes.func.isRequired,
  examples: PropTypes.object
}

export default Examples
