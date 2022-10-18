import styled from 'styled-components'

export const ListItem = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 32%;
  margin-bottom: 35px;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const EachVideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: transparent;
`
export const VideoThumbnail = styled.img`
  width: 100%;

  flex-shrink: 0;
`
export const ChannelThumbnail = styled.img`
  width: 28px;
  padding-top: 10px;
  margin-right: 3%;
  @media screen and (max-width: 768px) {
    margin-right: 1.5%;
  }
`
export const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 34px;
  background-color: transparent;
  @media (max-width: 768px) {
    margin-left: 10px;
  }
`
export const Paragraph = styled.p`
  color: ${props => (props.isDarkTheme ? ' #e2e8f0' : '#212121')};
  font-size: 14px;

  margin-bottom: 0;
  @media screen and (max-width: 768px) {
    margin-bottom: 5px;
  }
`
export const Para = styled.p`
  color: #616e7c;
  font-size: 13px;

  margin-bottom: 0;
  @media screen and (max-width: 768px) {
  }
`
export const Spare = styled.div`
  display: flex;
  align-items: center;
`
