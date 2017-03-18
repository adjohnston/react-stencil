import { getPathName } from '../src/helpers'

describe('#getPathName', () => {
  test('the name of the component from \'/components/atoms/button.jsx\' should be button', () => {
    const path = '/components/atoms/button.jsx'

    expect(getPathName(path)).toBe('button')
  })

  test('the name of the component from \'/components/molecules/dialog.js\' should be button', () => {
    const path = '/components/molecules/dialog.jsx'

    expect(getPathName(path)).toBe('dialog')
  })

  test('the name should throw without a file', () => {
    const path = '/components/molecules/'

    expect(() => getPathName(path)).toThrowError('path /components/molecules/ must include component file')
  })
})
