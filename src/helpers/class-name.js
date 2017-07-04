//    className : string -> string -> string
const className = (element, modifier) => {
  return `stencil${element ? `__${element}` : ''}${modifier ? `--${modifier}` : ''}`
}

export default className
