import {
  className
} from '../src/helpers'

describe('#className', () => {
  test(`given an 'title' as an elemen param expect 'rctnry__title'`, () => {
    expect(className('title')).toBe('rctnry__title')
  })
})
