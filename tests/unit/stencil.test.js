import React, { Component } from 'react'
import renderer from 'react-test-renderer'
import stencil from 'src/stencil'

class MockComponent extends Component {
  render () {
    return (
      <div>Hello world!</div>
    )
  }
}

test('it returns anything', () => {
  expect(stencil()(MockComponent)).toEqual(expect.anything())
})

test('it should return an instance of Component', () => {
  const DocumentedComponent = stencil()(MockComponent)
  const wrapper = renderer
    .create(<DocumentedComponent />)
    .getInstance()

  expect(wrapper).toBeInstanceOf(Component)
})
