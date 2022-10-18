import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
`

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 75%;
  background-color: ${props => (props.att ? ' #0f0f0f' : ' #f9f9f9 ')};
  @media screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`
export const Paragraph = styled.p`
  font-size: 16px;
  color: ${props => (props.att ? '#94a3b8' : ' #212121')};
  align-self: flex-start;
  @media (min-width: 577px) and (max-width: 768px) {
    margin-left: 28px;
  }
`

export const FeaturesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (min-width: 577px) and (max-width: 768px) {
    flex-direction: column;
    align-self: flex-start;
    margin-left: 28px;
  }
  @media (max-width: 576px) {
    flex-direction: column;
    align-self: flex-start;
  }
`
export const Para = styled.p`
  font-size: 14px;
  color: ${props => (props.att ? ' #7e858e' : '#383838')};
`

export const ChannelContainer = styled.div`
  display: flex;
`
export const Thumbnail = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-top: 15px;
  margin-right: 12px;
`
export const VideoAboutContainer = styled.div``

export const NamePara = styled.p`
  margin-bottom: 0;
  color: ${props => (!props.att ? ' #313131' : ' #616e7c')};
`

export const SubsPara = styled.p`
  margin-top: 0;
  color: ${props => (!props.att ? ' #313131' : ' #616e7c')};
`

export const Description = styled.p`
  color: ${props => (props.att ? '#e2e8f0' : ' #231f20')};
`
export const Buttons = styled.div`
  display: flex;
`

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  color: ${props => (props.col ? ' #2563eb' : '#64748b')};
  cursor: pointer;
  background-color: transparent;
  margin-right: 10px;
  font-size: 16px;
`

export const ButtonPara = styled.p``
export const Icon = styled.i``

export const FailImage = styled.img`
  width: 60%;
`
export const FailParaOne = styled.h1`
  color: ${props => (props.att ? '#94a3b8' : ' #231f20')};
`
export const FailParaTwo = styled.p`
  color: ${props => (props.att ? ' #64748b' : ' #212121')};
`
export const Retry = styled.button`
  color: snow;
  padding: 8px;
  border-radius: 6px;
  background-color: #4f46e5;
`
export const XContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`
export const ReactPlayerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: 577px) and (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 576px) {
    width: 100%;
  }
`
