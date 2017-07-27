import { handleInputOnChange } from 'src/components/Input'

test('should return a function', () => {
  expect(handleInputOnChange()).toBeInstanceOf(Function)
})

test('should return an object with value set to name', () => {
  const mockOnChange = () => ({ className: 'button' })
  const mockEvent = {
    target: {
      value: 'button'
    }
  }

  expect(handleInputOnChange(mockOnChange, 'className', 'string')(mockEvent)).toEqual({
    className: 'button'
  })
})

test('should return an object with value set to name', () => {
  const mockOnChange = () => ({ isActive: true })
  const mockEvent = {
    target: {
      checked: true
    }
  }

  expect(handleInputOnChange(mockOnChange, 'isActive', 'bool')(mockEvent)).toEqual({
    isActive: true
  })
})
