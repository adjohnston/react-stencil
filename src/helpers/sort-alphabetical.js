//    sortAlphabetical : array -> array
const sortAlphabetical = (array, keepTop) => {
  let keepTopString
  if (keepTop) {
    keepTopString = keepTop.toUpperCase()
  }

  return array.sort((a, b) => {
    const stringA = a.toUpperCase()
    const stringB = b.toUpperCase()

    // console.warn(stringA, stringA === 'DEFAULT', stringB, stringA === 'DEFAULT')
    if (keepTop && stringA === keepTopString) {
      return -1
    }

    if (stringA < stringB) {
      return -1
    }
    if (stringA > stringB) {
      return 1
    }

    return 0
  })
}

export default sortAlphabetical
