import React, { Component, Fragment } from 'react'
import { withStencil } from 'react-stencil'
import { Switch } from '@learnerbly/web-components'

const Template = ({ Component }) =>
  <Fragment>
    <Name>
      { (name) => <h6 style={{ background: 'pink' }}>{name}</h6> }
    </Name>

    <Component />
  </Fragment>

const DocumentedMessage = withStencil({
  // Template,

  name: 'Switch',

  description: 'This is an example of a switch component.',

  props: {
    value: true,
    onChange: () => {},
    label: 'I am on',
    altLabel: 'I am off'
  }
})(Switch)

class App extends Component {
  render() {
    return (
      <DocumentedMessage />
    )
  }
}

export default App
