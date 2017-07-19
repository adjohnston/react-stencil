//    classString : string -> string
const classString = (string) => {
  if (typeof string !== 'string') return null

  return `stncl${string}`
}

export default classString
