//    className : string -> string -> string
const className = (element, modifier) => {
  return `stncl${element ? `__${element}` : ''}${modifier ? `--${modifier}` : ''}`
}

export default className
