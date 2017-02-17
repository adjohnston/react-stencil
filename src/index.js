import React, { Component } from 'react'
import { render } from 'react-dom'
import Doc from './Doc'
import buttonSpec from 'components/examples/button/spec.yaml'

class Button extends Component {
  render() {
    return (
      <button
        style={this.props.type === 'primary' ? {background: 'blue'} : {background: 'grey'}}
        onClick={this.props.onClick}>
        Click Me
      </button>
    )
  }
}

console.log(buttonSpec)
const DocuButton = Doc(buttonSpec)(Button)

class App extends Component {
  render() {
    return (
      <DocuButton
        onClick={() => console.log('testing')} />
    )
  }
}

render(<App />, document.querySelector('#app'))
