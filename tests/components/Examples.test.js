import React from 'react'
import renderer from 'react-test-renderer'
import Examples from 'src/components/Examples'

test('it should not render without examples', () => {
  const props = {
    setExample: () => {}
  }

  const tree = renderer
    .create(<Examples {...props} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

test('it should render correctly', () => {
  const props = {
    examples: {},
    setExample: () => {}
  }

  const tree = renderer
    .create(<Examples {...props} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

test('it should show the value when the selection is changed', () => {
  const props = {
    examples: {
      'something else': {}
    },
    setExample: () => {}
  }

  const component = renderer.create(<Examples {...props} />)

  component
    .getInstance()
    .onChange({target: {value: 'something else'}})

  expect(component.toJSON()).toMatchSnapshot()
})
