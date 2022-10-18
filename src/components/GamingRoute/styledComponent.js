import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  background: ${props => (props.att ? '#181818' : '#ffffff')};
`
export const GamingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
  background-color: ${props => (props.att ? '#0f0f0f' : '#f9f9f9')};
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const GamingHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: ${props => (props.att ? ' #181818' : '#f1f1f1')};
  @media (min-width: 577px) and (max-width: 768px) {
    padding: 10px;
    padding-left: 40px;
  }
  @media (max-width: 576px) {
    padding-left: 20px;
    padding: 8px;
  }
`
export const GamingLogoContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  padding-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  background-color: ${props => (props.att ? ' black' : '#94a3b8')};
`
export const Heading = styled.h1`
  color: ${props => (props.att ? 'snow' : 'black')};
  font-size: 26px;
  font-family: Roboto;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 17px;
  }
`

export const Icon = styled.i`
  font-size: 24px;
  color: red;
`
export const GamingListContainer = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  margin-top: 0;

  padding-top: 20px;

  justify-content: space-between;
  align-items: center;
  background-color: ${props => (props.att ? '#0f0f0f' : '#f9f9f9')};
`
export const XContainer = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (!props.att ? '#f9f9f9' : '#0f0f0f')};
`
export const FailureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: ${props => (props.att ? '#0f0f0f' : '#f9f9f9')};
`
export const ParaGraph = styled.h1`
color:${props => (props.att ? '#ebebeb' : ' #616e7c')}
font-size:20px;
`
export const Para = styled.p`
  color: ${props => (props.att ? '#d7dfe9' : '#212121')};
  font-size: 15px;
`
export const Retry = styled.button`
  border: none;
  color: snow;
  background-color: '#4f46e5';
  cursor: pointer;
  border-radius: 6px;
`
export const Image = styled.img`
  width: 60%;
  @media screen and (max-width: 768px) {
    width: 70%;
  }
`
