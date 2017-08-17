//    kebabCase : string -> string
const kebabCase = (string) => {
  return string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase()
}

export default kebabCase
