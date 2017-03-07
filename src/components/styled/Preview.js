import React, { PropTypes } from 'react'
import styled from 'styled-components'

const Preview = styled.section`
  display: flex;
  justify-content: center;
  margin: 0 0 1rem;
  padding: 5rem;
  background: #eee;
`

Preview.propTypes = {
  children: PropTypes.element.isRequired
}

export default Preview
