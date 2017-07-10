import React from 'react'
import renderer from 'react-test-renderer'
import Input from 'components/Input'

test('renders correctly', () => {
  const mockProps = {
    name: 'className',
    type: 'string',
    value: 'button',
    onChange: () => {}
  }

  const tree = renderer
    .create(<Input {...mockProps} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
