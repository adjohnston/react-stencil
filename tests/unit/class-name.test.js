import className from 'helpers/class-name'

describe('#className', () => {
  test(`given 'title' as an element param expect 'stncl__title'`, () => {
    expect(className('title')).toBe('stncl__title')
  })

  test(`given 'large' as a modifier param expect 'stncl--large'`, () => {
    expect(className(null, 'large')).toBe('stncl--large')
  })

  test(`given 'title' as an element param & 'large' as a modifier param expect 'stncl__title--large'`, () => {
    expect(className('title', 'large')).toBe('stncl__title--large')
  })
})
