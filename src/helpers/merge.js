import assign from 'assign-deep'

//    merge : -> object : object -> object
const merge = ({props, swatches} = {}, component) => {
  return assign({}, {props, swatches}, component)
}

export { merge }
