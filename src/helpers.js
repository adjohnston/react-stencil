//    className : string -> string -> string
const className = (el, mod) => {
  return `rctnry${el ? `__${el}` : ''}${mod ? `--${mod}` : ''}`
}

module.exports = {
  className
}
