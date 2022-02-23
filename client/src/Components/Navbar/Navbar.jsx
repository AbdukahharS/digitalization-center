import React from 'react'
import { Logo, Container, LinkContainer, NavLink } from './NavbarStyles'

const Navbar = () => {
  return (
    <Container>
      <Logo>LOGO</Logo>
      <LinkContainer>
        <NavLink to='/'>Модули</NavLink>
        <NavLink to='/'>новости</NavLink>
        <NavLink to='/'>ресурсы</NavLink>
        <NavLink to='/'>Поддержка</NavLink>
        <NavLink to='/'>профиль</NavLink>
        <NavLink to='/'>язык</NavLink>
      </LinkContainer>
    </Container>
  )
}

export default Navbar
