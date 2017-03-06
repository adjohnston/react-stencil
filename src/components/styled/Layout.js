import React, { PropTypes } from 'react'
import styled from 'styled-components'

const Layout = styled.section`
  display: flex;
  flex-flow: row wrap;
`

Layout.propTypes = {
  children: PropTypes.array.isRequired
}

export default Layout
