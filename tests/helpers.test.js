import {
  splitOnHyphen,
  upperCaseWords,
  joinChars,
  getPathName
} from '../src/helpers'

describe('#splitOnHyphen', () => {
  test(`given 'hello-world' expect ['hello', 'world']`, () => {
    expect(splitOnHyphen('hello-world')).toEqual(['hello', 'world'])
  })
})

describe('#upperCaseWords', () => {
  test(`given ['hello', 'world'] expect ['HELLO', 'WORLD']`, () => {
    expect(upperCaseWords(['hello', 'world'])).toEqual(['HELLO', 'WORLD'])
  })
})

describe('#joinChars', () => {
  test(`given ['hello', 'world'] expect 'helloworld'`, () => {
    expect(joinChars(['hello', 'world'])).toEqual('helloworld')
  })
})

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
