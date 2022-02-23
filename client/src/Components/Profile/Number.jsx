import React from 'react'
import { CardTitle, LastChange, CardText } from './ProfileStyles'
import {
  Input,
  InputContainer,
  Label,
  Button,
} from '../../Styles/GlobalComponents'

const Number = () => {
  return (
    <>
      <CardTitle>Change Phone number</CardTitle>
      <CardText>
        Phone no. currently registered (+998 93 497 11-38) Available services:
        EXAMS; HELP DASK; ELECTIONS;
      </CardText>
      <InputContainer>
        <Label>New phone number:</Label>
        <Input type='text' placeholder='Eg. your phone number here' />
        <Label>Disable forwarding:</Label>
        <input
          style={{ marginLeft: '0.4rem', verticalAlign: 'middle' }}
          type='checkbox'
        />
      </InputContainer>
      <Button>send</Button>
      <LastChange>
        Last phone number change: 29/07/2021 22:09 22:09 - IP 151.33.106.247
      </LastChange>
    </>
  )
}

export default Number
