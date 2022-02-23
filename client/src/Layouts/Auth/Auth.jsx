import React from 'react'
import { Container } from './AuthStyles'
import Banner from './Banner'

const Auth = ({ children }) => {
  return (
    <Container>
      <Banner />
      {children}
    </Container>
  )
}

export default Auth
