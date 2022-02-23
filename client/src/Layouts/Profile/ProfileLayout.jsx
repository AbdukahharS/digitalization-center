import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Container, MainContainer } from './ProfileStyles'

const ProfileLayout = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <MainContainer>{children}</MainContainer>
    </Container>
  )
}

export default ProfileLayout
