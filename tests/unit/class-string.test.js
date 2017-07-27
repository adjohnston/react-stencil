import classString from 'src/helpers/class-string'

describe('#classString', () => {
  test(`given no argument should return null`, () => {
    expect(classString()).toBe(null)
  })

  test(`given a string should return string prefixed with 'stncl'`, () => {
    expect(classString('__element')).toBe('stncl__element')
    expect(classString('--modifier')).toBe('stncl--modifier')
    expect(classString('no-underscore')).toBe('stnclno-underscore')
  })

  test(`given an argument other than type of string should return null`, () => {
    expect(classString(1)).toBe(null)
    expect(classString([])).toBe(null)
    expect(classString({})).toBe(null)
    expect(classString(true)).toBe(null)
  })
})
