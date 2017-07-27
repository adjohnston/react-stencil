import React from 'react'
import renderer from 'react-test-renderer'
import Input from 'src/components/Input'

const mockInputStringProps = {
  name: 'className',
  type: 'string',
  value: 'button',
  onChange: () => {}
}

const mockCheckboxBoolProps = {
  name: 'isActive',
  type: 'bool',
  value: false,
  onChange: () => {}
}

test('renders correctly', () => {
  const tree = renderer
    .create(<Input {...mockInputStringProps} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

test('renders input type of checkbox given a type of bool', () => {
  const tree = renderer
    .create(<Input {...mockCheckboxBoolProps} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})

test('renders input type of checkbox given a type of bool and has attribute checked', () => {
  const {
    value,
    ...restProps
  } = mockCheckboxBoolProps

  const tree = renderer
    .create(<Input {...restProps} value={true} />)
    .toJSON()

  expect(tree).toMatchSnapshot()
})
