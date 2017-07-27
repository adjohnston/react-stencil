import transformValue from 'src/helpers/transform-value'

test('return a value as is without a type', () => {
  expect(transformValue('hello world')).toBe('hello world')
  expect(transformValue('32')).toBe('32')
})

test('return a string given a type of string', () => {
  expect(transformValue('hello world', 'string')).toBe('hello world')
})

test('return an empty string given a type of func', () => {
  expect(transformValue(() => {}, 'func')).toBe('')
})

test('return a number given a type of number', () => {
  expect(transformValue('32', 'number')).toBe(32)
})

test(`return true given a value 'true' and a type of bool`, () => {
  expect(transformValue('true', 'bool')).toBe(true)
})

test(`return false given a value 'false' or  '' and a type of bool`, () => {
  expect(transformValue('false', 'bool')).toBe(false)
  expect(transformValue('', 'bool')).toBe(false)
})
