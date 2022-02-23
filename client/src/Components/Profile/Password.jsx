import React from 'react'
import { CardTitle, LastChange, CardText } from './ProfileStyles'
import {
  Input,
  InputContainer,
  Label,
  Button,
} from '../../Styles/GlobalComponents'

const Password = () => {
  return (
    <>
      <CardTitle>Change password</CardTitle>
      <CardText>We suggest you change your password regularly</CardText>
      <InputContainer>
        <Label>Current password:</Label>
        <Input type='password' placeholder='Eg. your password here' />
        <Label>New password:</Label>
        <Input type='password' placeholder='Eg. your password here' />
        <Label>Confirm password:</Label>
        <Input type='password' placeholder='Eg. your password here' />
      </InputContainer>
      <Button>CHANGE</Button>
      <LastChange>
        Last password change: 29/07/2021 22:09 - IP 151.33.106.247
      </LastChange>
    </>
  )
}

export default Password
