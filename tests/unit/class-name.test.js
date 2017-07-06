import className from 'helpers/class-name'

describe('#className', () => {
  test(`given 'title' as an element param expect 'stencil__title'`, () => {
    expect(className('title')).toBe('stencil__title')
  })

  test(`given 'large' as a modifier param expect 'stencil--large'`, () => {
    expect(className(null, 'large')).toBe('stencil--large')
  })

  test(`given 'title' as an element param & 'large' as a modifier param expect 'stencil__title--large'`, () => {
    expect(className('title', 'large')).toBe('stencil__title--large')
  })
})
