import styled from 'styled-components'

const Button = styled.button`
  background: #262628;
  font-weight: 700;
  font-size: 1rem;
  color: #fff;
  width: 15rem;
  padding: 0.6rem;
  margin: auto;
  display: block;
  text-transform: uppercase;
`

const InputContainer = styled.form`
  display: block;
  width: 65%;
  margin: auto;
`

const Input = styled.input`
  border: 1px solid #cfd0d7;
  border-radius: 2px;
  padding: 0.4rem 0.6rem;
  font-size: 1.2rem;
  display: block;
  width: 100%;
`
const Select = styled.select`
  border: 1px solid #cfd0d7;
  border-radius: 2px;
  padding: 0.4rem 0.6rem;
  font-size: 1.2rem;
  display: block;
  width: 100%;
  background: #fff;
  color: rgba(26, 32, 61, 0.3);
`

const Label = styled.label`
  color: #5f6377;
  font-weight: 500;
  font-size: 1.2rem;
  margin: 0.8rem 0 0.4rem 0;
  display: inline-block;
`

const Card = styled.div`
  box-shadow: 3.75215px 3.75215px 18.7607px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 12.5072px 12.5072px;
  width: 48%;
  min-height: 500px;
  margin: 1.2rem 0;
  padding: 2.4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export { InputContainer, Button, Label, Input, Select, Card }
