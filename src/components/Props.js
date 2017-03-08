import React, { Component, PropTypes } from 'react'
import Subtitle from 'components/styled/Subtitle'
import {
  List,
  Item
} from 'components/styled/List'
import { Message } from 'components/styled/Note'
import { InputText } from 'components/styled/Input'

const isType = (propType, type) => propType === type
const isRequired = propType => typeof propType === 'object' ? true : false
const type = prop => isRequired(prop) ? prop[0] : prop

class Props extends Component {
  constructor(props) {
    super(props)

    this.InputElement = this.InputElement.bind(this)
  }

  InputElement(prop, propType) {
    const {
      state,
      setProp
    } = this.props

    let inputElement

    if (isType(propType, 'string') || isType(propType, 'number')) {
      inputElement = (
        <InputText
          type="text"
          value={state[prop]}
          onChange={({target: {value}}) => {
            setProp(prop, isType(propType, 'number') ? Number(value) : value)
          }} />
      )
    }

    if (propType === 'bool') {
      inputElement = (
        <input
          type="checkbox"
          checked={state[prop]}
          onClick={({target: {checked}}) => setProp(prop, checked)} />
      )
    }

    return inputElement || null
  }

  render() {
    const props = this.props.props

    return props && (
      <section>
        <Subtitle>
          Props
        </Subtitle>

        <List>
          {Object.keys(props).map(prop => {
            const property = props[prop]
            const propType = type(property.type || property)
            const propRequired = property.isRequired ? '*' : null
            const propMsg = property.msg && (
              <Message>
                {property.msg}
              </Message>
            ) || null

            return (
              <Item
                key={prop}>
                <b>{prop}</b> - {propType}{propRequired}<br />
                {this.InputElement(prop, propType)}
                {propMsg}
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
