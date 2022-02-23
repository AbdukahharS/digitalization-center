import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.span`
  font-weight: 800;
  font-size: 3rem;
`
const LinkContainer = styled.div`
  display: flex;
`

const NavLink = styled(Link)`
  font-weight: 700;
  font-size: 1.25rem;
  color: #193325;
  text-transform: uppercase;
  margin: 0 0.8rem;
`

export { Logo, Container, LinkContainer, NavLink }
