import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  background: ${props => (props.att ? '#181818' : '#ffffff')};
`
export const NotFoundContainer = styled.div`
  height: 110vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 75%;
  align-items: center;
  background-color: ${props => (props.att ? '#181818' : '#f9f9f9')};
  @media screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
    padding: 24px;
    text-align: center;
  }
`
export const Image = styled.img`
  width: 40%;
  @media screen and (max-width: 768px) {
    width: 60%;
  }
`
export const Paragraph = styled.h1`
  color: ${props => (props.att ? 'snow' : '#00033a')};
  font-size: 24px;
  font-weight: bold;
`
export const LastPara = styled.p`
  color: ${props => (props.att ? '#f1f2e0' : '#7e858e')};
`
