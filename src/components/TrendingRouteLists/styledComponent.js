import styled from 'styled-components'

export const ListItem = styled.li`
  width: 90%;
  display: flex;
  align-items: center;
  padding: 20px;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`
export const Image = styled.img`
  width: 50%;
  margin-right: 20px;
  @media screen and (max-width: 768px) {
    width: 55%;
    margin-right: 10px;
  }
`
export const Heading = styled.p`
  font-size: 16px;
  margin-top: 0;
  color: ${props => (!props.att ? '#181818' : ' #f9f9f9')};
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`

export const Paragraph = styled.p`
  font-size: 14px;
  margin-top: 0;
  color: ${props => (!props.att ? '#475569' : ' #64748b')};
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`
export const TextPartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  @media screen and (max-width: 768px) {
    width: 45%;
  }
`
