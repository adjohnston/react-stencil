import React, { Fragment } from 'react'
import { Name, Preview, PropsList, Field } from '../../components'

const Template = () => {
  return (
    <Fragment>
      <Name />
      <Preview />
      <PropsList />
    </Fragment>
  )
}

export { Template as DefaultTemplate }
