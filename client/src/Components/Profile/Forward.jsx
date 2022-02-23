import React from 'react'
import { CardTitle, LastChange, CardText } from './ProfileStyles'
import {
  Input,
  InputContainer,
  Label,
  Button,
} from '../../Styles/GlobalComponents'

const Forward = () => {
  return (
    <>
      <CardTitle>Forward</CardTitle>
      <CardText>
        TDAU is not responsible for any lost message due to the activation of
        the forwarding service. Valid messages are those stored in the server
        with domain: student@tdau.uz Make sure you regularly delete the messages
        stored on this server.
      </CardText>
      <InputContainer>
        <Label>Forwarding e-mail address:</Label>
        <Input type='text' placeholder='Eg. your e-mail here' />
        <Label>Disable forwarding:</Label>
        <input
          style={{ marginLeft: '0.4rem', verticalAlign: 'middle' }}
          type='checkbox'
        />
      </InputContainer>
      <Button>change</Button>
      <LastChange>
        Last e-mail change: 29/07/2021 22:09 - IP 151.33.106.247
      </LastChange>
    </>
  )
}

export default Forward
