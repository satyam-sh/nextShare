import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: ${props => (props.att ? '#0f0f0f' : '#f9f9f9')};
`
export const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props => (props.att ? '#0f0f0f' : '#f9f9f9')};
`
export const RouteContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const TrendingHeaderContainer = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;

  background-color: ${props => (props.isDarkTheme ? ' #181818' : '#ebebeb')};
  @media (min-width: 577px) and (max-width: 768px) {
    padding: 10px;
    padding-left: 30px;
  }
  @media (max-width: 576px) {
    padding-left: 10px;
    padding: 8px;
  }
`
export const Heading = styled.h1`
  color: ${props => (!props.att ? '#0f0f0f' : '#f9f9f9')};
  font-size: 26px;
  font-family: Roboto;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 17px;
  }
`

export const ResultsContainer = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0;
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
`
export const Icon = styled.div`
  width: 60px;
  height: 60px;

  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 26px;
  background-color: ${props => (props.att ? '#0f0f0f' : ' #94a3b8')};
`
export const XContainer = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Image = styled.img`
  width: 50%;
`
export const ParaOne = styled.h1`
  color: ${props => (props.att ? '#ebebeb' : '#424242')};
`
export const ParaTwo = styled.p`
  color: ${props => (props.att ? '#cbd5e1' : '#f1f5f9')};
`
export const Retry = styled.button`
  color: snow;
  border: none;
  cursor: pointer;
  background-color: #3b82f6;
  padding: 10px;
`
