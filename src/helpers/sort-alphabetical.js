//    sortAlphabetical : array -> array
const sortAlphabetical = (array) => {
  return array.sort((a, b) => {
    var stringA = a.toUpperCase()
    var stringB = b.toUpperCase()
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
