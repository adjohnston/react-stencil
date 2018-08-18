import React from 'react'

import { Custom } from '../context'
import { Field as InternalField } from './internal/Field'

const Field = ({ children, prop }) => {
  return (
    <Custom>
      {({ changeHandler, props }) => {
        const newProps = {
          prop,
          type: typeof props[prop],
          value: props[prop],
          changeHandler: changeHandler(prop),
        }

        return children ? children(newProps) : <InternalField {...newProps} />
      }}
    </Custom>
  )
}

export { Field }
