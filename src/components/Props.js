import React from 'react'
import PropTypes from 'prop-types'
import Prop from 'src/components/Prop'
import transformValue from 'src/helpers/transform-value'

const FallbackTemplate = (setProp, props, state) => {
  return (!!props && !!state && (
    <section>
      <h2>
        Props
      </h2>

      <ul>
        {Object.keys(props).map(prop => (
          <Prop
            key={prop}
            name={prop}
            defs={props[prop]}
            value={transformValue(state[prop], props[prop].type)}
            onChange={setProp} />
        ))}
      </ul>
    </section>
  )) || null
}

const Props = ({ children, setProp, props, state }) => (
  (children && props && state)
    ? children(setProp, props, state)
    : FallbackTemplate(setProp, props, state)
)

Props.propTypes = {
  setProp: PropTypes.func.isRequired,
  state: PropTypes.object,
  props: PropTypes.object
}

export default Props
