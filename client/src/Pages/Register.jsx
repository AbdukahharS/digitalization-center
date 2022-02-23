import React, { useRef, useState } from 'react'
import axios from 'axios'
import Auth from '../Layouts/Auth/Auth'
import Hero from '../Components/Hero/Hero'
import Form from '../Components/Hero/Form'
import {
  InputContainer,
  Button,
  Label,
  Input,
  Select,
} from '../Styles/GlobalComponents/index'
import InputPassword from '../Styles/GlobalComponents/InputPassword'

const Register = () => {
  const loginInp = useRef('')
  const nameInp = useRef('')
  const surnameInp = useRef('')
  const emailInp = useRef('')
  const phoneInp = useRef(0)
  const [password, setPassword] = useState('')

  const handleClick = async () => {
    const login = loginInp.current.value
    const name = nameInp.current.value
    const surname = surnameInp.current.value
    const email = emailInp.current.value
    const phone = phoneInp.current.value
    console.log(login, name, surname, email, phone, password)
    if (!login || !name || !surname || !email || !phone || !password) {
      alert('All inputs must be filled!')
    } else {
      const user = { login, name, surname, email, password, phone }
      const res = await axios.post(
        'http://localhost:2000/api/user/register',
        user
      )
      console.log(res)
    }
  }

  return (
    <Auth>
      <Hero>
        <h2 style={{ fontWeight: 700, fontSize: '3rem' }}>LOGO</h2>
        <h1 style={{ fontWeight: 700, fontSize: '3rem', textAlign: 'center' }}>
          REGISTER <br /> FORM
        </h1>
      </Hero>
      <Form>
        <InputContainer>
          <h3 style={{ textAlign: 'center', marginBottom: '1.2rem' }}>LOGO</h3>
          <Label>Login</Label>
          <Input ref={loginInp} placeholder='Eg. your login here' type='text' />
          <Label>Name</Label>
          <Input ref={nameInp} placeholder='Eg. your name here' type='text' />
          <Label>Surname</Label>
          <Input
            ref={surnameInp}
            placeholder='Eg. your surname here'
            type='text'
          />
          <Label>e-mail</Label>
          <Input ref={emailInp} placeholder='Eg. your email here' type='text' />
          <Label>Phone number</Label>
          <Input
            ref={phoneInp}
            placeholder='Eg. your number here'
            type='number'
          />
          <Label>Faculty</Label>
          <Select placeholder='Select Faculty'>
            <option value=''>Select Faculty</option>
          </Select>
          <Label>Password</Label>
          <InputPassword
            value={password}
            handleChange={(e) => {
              setPassword(e.target.value)
            }}
          />
          <Button onClick={handleClick}>SIGN UP</Button>
        </InputContainer>
      </Form>
    </Auth>
  )
}

export default Register
