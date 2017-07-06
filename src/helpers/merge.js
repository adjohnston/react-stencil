import assign from 'assign-deep'

//    merge : -> object : object -> object
export const merge = ({props, swatches} = {}, component) => {
  return assign({}, {props, swatches}, component)
}

export default merge
