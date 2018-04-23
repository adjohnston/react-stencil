import assign from 'assign-deep'

//    merge : -> object | object -> object
const merge = ({props, swatches, template} = {}, component) => {
  const propsToMerge = props && Object.keys(props).reduce((propsToMerge, key) => {
    if (key in props && key in component.props) {
      propsToMerge[key] = props[key]
    }
    return propsToMerge
  }, {})

  return assign({}, {
    swatches,
    template,
    props: propsToMerge
  }, component)
}

export default merge
