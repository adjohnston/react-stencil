import React from 'react'
import renderer from 'react-test-renderer'
import Preview from 'components/Preview'

const Test = () => <div>Just a test</div>

test('it renders correctly', () => {
  const props = {
    swatches: [],
    children: <Test />
  }

  const tree = renderer
    .create(<Preview {...props} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

test('it renders a list of swatch buttons if swatches are passed', () => {
  const props = {
    swatches: ['white', 'black', '#f35'],
    children: <Test />
  }

  const tree = renderer
    .create(<Preview {...props} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

test('it renders a different background colour when a swatch is clicked', () => {
  const props = {
    swatches: ['white', 'black', '#f35'],
    children: <Test />
  }

  const component = renderer
    .create(<Preview {...props} />)

  component
    .getInstance()
    .setSwatch('#f35')

  expect(component.toJSON()).toMatchSnapshot()
})
