import merge from 'src/helpers/merge'

describe('#merge', () => {
  test('return an empty object if no arguments are passed', () => {
    const expectation = {}
    const actual = merge()

    expect(actual).toEqual(expectation)
  })

  test('returns a correctly defined spec', () => {
    const componentSpec = {
      name: 'Test Component',
      description: 'Just a small test component',
      props: {
        id: {
          type: 'string',
          required: false
        },

        onClick: {
          type: 'func',
          required: true
        },

        className: {
          type: 'string',
          required: false,
          defaultValue: 'button'
        }
      },
      notes: {
        'Developer': `This shouldn't be used outside of testing 😉`
      }
    }
    const expectation = componentSpec
    const actual = merge({}, componentSpec)

    expect(actual).toEqual(expectation)
  })

  test('componentSpec overwrites globalSpec', () => {
    const globalSpec = {
      props: {
        onClick: {
          description: 'An event that will trigger an action'
        }
      },
      swatches: ['pink']
    }

    const componentSpec = {
      props: {
        onClick: {
          type: 'func',
          required: true,
          description: 'I should overwrite'
        }
      },
      swatches: ['yellow']
    }

    const expectation = componentSpec
    const actual = merge(globalSpec, componentSpec)

    expect(actual).toEqual(expectation)
  })

  test('componentSpec merges with globalSpec', () => {
    const globalSpec = {
      props: {
        onClick: {
          description: 'An event that will trigger an action'
        }
      },
      swatches: ['pink']
    }

    const componentSpec = {
      props: {
        onClick: {
          type: 'func',
          required: true
        }
      }
    }

    const expectation = {
      props: {
        onClick: {
          type: 'func',
          required: true,
          description: 'An event that will trigger an action'
        }
      },
      swatches: ['pink']
    }

    const actual = merge(globalSpec, componentSpec)

    expect(actual).toEqual(expectation)
  })

  test(`globalSpec doesn't merge unwanted properties`, () => {
    const globalSpec = {
      name: 'Bad Global Name',
      description: 'I am a unwanted global description',
      status: 'DANGEROUS',
      examples: {},
      notes: {}
    }

    const expectation = {}
    const actual = merge(globalSpec, {})

    expect(actual).toEqual(expectation)
  })

  test(`globalSpec doesn't merge unknown properties with component spec`, () => {
    const globalSpec = {
      props: {
        id: {
          type: 'string',
          description: 'I should not appear'
        }
      }
    }

    const componentSpec = {
      props: {
        onClick: {
          type: 'func'
        }
      }
    }

    const expectation = {
      props: {
        onClick: {
          type: 'func'
        }
      }
    }

    const actual = merge(globalSpec, componentSpec)

    expect(actual).toEqual(expectation)
  })
})
