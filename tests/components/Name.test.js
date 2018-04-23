import React from 'react'
import renderer from 'react-test-renderer'
import Name from 'src/components/Name'

test('it should render correctly with `name` as a string', () => {
  const mockProps = {
    name: 'Component Name'
  }

  const tree = renderer
    .create(<Name {...mockProps} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

test('it should render correctly when given a template', () => {
  const mockProps = {
    name: 'A test component',
    children: (name) => (
      <h1
        className='custom-template'>
        Component: {name}
      </h1>
    )
  }

  const tree = renderer
    .create(<Name {...mockProps} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

test('it should render null with no children', () => {
  const tree = renderer
    .create(<Name />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
