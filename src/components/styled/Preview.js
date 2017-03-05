import React, { PropTypes } from 'react'
import styled from 'styled-components'

const Preview = styled.section`
  display: flex;
  justify-content: center;
  padding: 5rem;
`

Preview.propTypes = {
  children: PropTypes.element.isRequired
}

export default Preview
