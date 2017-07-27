import React from 'react'
import renderer from 'react-test-renderer'
import Description from 'src/components/Description'

test('it should render correctly with children as a string', () => {
  const mockProps = {
    children: 'I am just a basic description'
  }

  const tree = renderer
    .create(<Description {...mockProps} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

test('it should render correctly with children as a component', () => {
  const mockProps = {
    children: (
      <p>
        'I am just a basic description component'
      </p>
    )
  }

  const tree = renderer
    .create(<Description {...mockProps} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

test('it should render null with no children', () => {
  const tree = renderer
    .create(<Description />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
