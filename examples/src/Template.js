import React, { Fragment } from 'react'
import { Name, Preview } from 'react-stencil'

export default ({ Component }) => (
  <Fragment>
    <Preview>{({ Component }) => <section style={{ background: 'pink' }}>
      <Component />
    </section>}</Preview>
    <Name>{({ name }) => <h6 style={{ background: 'pink' }}>{name}</h6>}</Name>
  </Fragment>
)
