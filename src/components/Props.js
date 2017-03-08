import React, { Component, PropTypes } from 'react'
import Subtitle from 'components/styled/Subtitle'
import {
  List,
  Item
} from 'components/styled/List'

const isRequired = prop => typeof prop === 'object' ? true : false
const type = prop => isRequired(prop) ? prop[0] : prop

class Props extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }

    this.onChange = this.onChange.bind(this)
    this.InputElement = this.InputElement.bind(this)
  }

  onChange(value) {
    this.setState({value})
  }

  InputElement(prop, propType) {
    const setProp = this.props.setProp

    let inputElement

    if (propType === 'string') {
      inputElement = (
        <input
          onChange={({target: {value}}) => setProp(prop, value)} />
      )
    }

    if (propType === 'bool') {
      inputElement = (
        <input
          type="checkbox"
          onClick={({target: {checked}}) => setProp(prop, checked)} />
      )
    }

    return inputElement || null
  }

  render() {
    const props = this.props.props
    console.log(props);
    return props && (
      <section>
        <Subtitle>
          Props
        </Subtitle>

        <List>
          {Object.keys(props).map(prop => {
            const propTypes = props[prop]
            const propType = type(propTypes)
            return (
              <Item
                key={prop}>
                {prop}: {isRequired(propTypes) ? <b>{propType}</b> : propType}<br />
                {this.InputElement(prop, type(props[prop]))}
              </Item>
            )
          })}
        </List>
      </section>
    ) || null
  }
}

Props.propTypes = {
  setProp: PropTypes.func.isRequired,
  props: PropTypes.object
}

export default Props
