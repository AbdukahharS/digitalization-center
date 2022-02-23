import styled from 'styled-components'

const MainInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const ProfileImg = styled.img`
  border-radius: 20.0114px;
  width: 9.4rem;
  height: 9.4rem;
  filter: drop-shadow(0px 5.00286px 5.00286px rgba(0, 0, 0, 0.25));
`

const Name = styled.span`
  font-weight: 700;
  font-size: 1.4rem;
  display: block;
  line-height: 1.8rem;
`

const Span = styled.span`
  font-size: 1.4rem;
  display: block;
  line-height: 1.8rem;
`

const SecondaryInfo = styled.div`
  width: 100%;
  text-align: left;
  margin-top: 1.4rem;
`

const CardTitle = styled.span`
  font-weight: 700;
  margin: 0.8rem 0;
  display: block;
`

const CardText = styled.span`
  font-size: 1.2rem;
  display: block;
  text-align: center;
`

const LastChange = styled.span`
  font-size: 1rem;
  color: #292929;
  font-weight: 400;
  margin-top: 0.6rem;
`

export {
  MainInfo,
  SecondaryInfo,
  ProfileImg,
  Name,
  Span,
  CardTitle,
  LastChange,
  CardText,
}
