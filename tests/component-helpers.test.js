import {
  className
} from '../src/helpers'

describe('#className', () => {
  test(`given 'title' as an element param expect 'rctnry__title'`, () => {
    expect(className('title')).toBe('rctnry__title')
  })

  test(`given 'large' as a modifier param expect 'rctnry--large'`, () => {
    expect(className(null, 'large')).toBe('rctnry--large')
  })

  test(`given 'title' as an element param & 'large' as a modifier param expect 'rctnry__title--large'`, () => {
    expect(className('title', 'large')).toBe('rctnry__title--large')
  })
})
