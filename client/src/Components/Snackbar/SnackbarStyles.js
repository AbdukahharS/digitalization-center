import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  /*background-color: ${(props) => {
    console.log(props)
    return props.variant === 'success'
      ? '#2E7D32'
      : props.variant === 'error'
      ? '#D32F2F'
      : '#323232'
  }};*/
  color: #fff;
  padding: 0.6rem 1rem;
  font-size: 1.4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 0.6rem;
  min-width: 10rem;
  justify-content: space-between;
`

const Close = styled.button`
  display: flex;
  align-items: center;
  justify-center: center;
  margin-left: 0.4rem;
  color: #fff;
`

export { Container, Close }
