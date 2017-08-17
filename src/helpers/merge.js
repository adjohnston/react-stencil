import _merge from 'lodash.merge'

//    merge : -> object : object -> object
const merge = ({props, swatches} = {}, component) => {
  return _merge({}, {props, swatches}, component)
}

export default merge
