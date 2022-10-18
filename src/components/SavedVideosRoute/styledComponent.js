import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
`
export const SavedVideoContainerList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 20px;
  width: 100%;
  align-items: center;
  @media screen and (max-width: 576px) {
    padding: 5px;
  }
`

export const SubContainer = styled.div`
  height: 110vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 75%;
  background-color: ${props => (props.att ? '#0f0f0f' : '#f9f9f9')};
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`
export const SubContainerTrue = styled.div`
  display: flex;
  flex-direction: column;

  width: 75%;
  background-color: ${props => (props.att ? '#0f0f0f' : '#f9f9f9')};
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  background-color: ${props => (props.att ? '#181818' : '#f1f1f1')};
  @media (min-width: 577px) and (max-width: 768px) {
    padding: 10px;
    padding-left: 30px;
  }
  @media (max-width: 576px) {
    padding-left: 10px;
  }
`
export const Heading = styled.h1`
  color: ${props => (props.att ? 'snow' : '#0f0f0f')};
  font-size: 26px;
  font-family: Roboto;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 17px;
  }
`

export const Image = styled.img`
  width: 50%;
`
export const Paragraph = styled.p`
  font-size: ${props => `${props.size}px`};
  color: ${props => (props.att ? 'snow' : '#232323')};
`
export const SpareHeader = styled.h1`
  font-size: 22px;
  color: ${props => (props.att ? 'snow' : '#232323')};
`

export const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  margin-right: 16px;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.att ? '#000000' : '#e2e8f0')};
`
