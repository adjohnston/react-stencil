import React from 'react'

export default (props) => (
  <div>
    <h1>{props.name || 'Bob'}</h1>
    {props.children}
  </div>
)
