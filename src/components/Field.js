import React from 'react'

import { Custom } from '../context'
import { Field as InternalField } from './internal/Field'

const Field = ({ children, prop, type, value }) => {
  return (
    <Custom>
      {({ changeHandler }) =>
        children ? (
          children({ changeHandler, prop, type, value })
        ) : (
          <InternalField
            prop={prop}
            type={type}
            value={value}
            onChange={changeHandler}
          />
        )
      }
    </Custom>
  )
}

export { Field }
