import React from 'react'
import { Link } from 'react-router-dom'
import Auth from '../Layouts/Auth/Auth'
import Hero from '../Components/Hero/Hero'
import Form from '../Components/Hero/Form'
import {
  InputContainer,
  Button,
  Label,
  Input,
} from '../Styles/GlobalComponents/index'
import InputPassword from '../Styles/GlobalComponents/InputPassword'

const Signin = () => {
  return (
    <Auth>
      <Hero>
        <h2 style={{ fontWeight: 700, fontSize: '3rem' }}>LOGO</h2>
        <h1 style={{ fontWeight: 700, fontSize: '3rem' }}>SIGN IN</h1>
      </Hero>
      <Form>
        <InputContainer>
          <h3 style={{ textAlign: 'center', marginBottom: '1.2rem' }}>LOGO</h3>
          <Label>Login</Label>
          <Input placeholder='Eg. your login here' type='text' />
          <Label>Password</Label>
          <InputPassword />
          <Link to='/register'>Sign up</Link>
          <Button>SIGN IN</Button>
        </InputContainer>
      </Form>
    </Auth>
  )
}

export default Signin
