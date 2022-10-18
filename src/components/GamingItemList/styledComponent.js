import styled from 'styled-components'

export const GamingListItem = styled.li`
  width: 32%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 16px;
  @media screen and (max-width: 576px) {
    width: 49%;
  }
`
export const Image = styled.img`
  width: 80%;
  @media screen and (max-width: 576px) {
    width: 90%;
  }
`

export const Paragraph = styled.p`
  margin-bottom: 0;
  color: ${props => (!props.att ? ' #424242' : 'snow')};
`
export const ParagraphTwo = styled.p`
  margin-top: 0;
  color: ${props => (props.att ? ' #64748b' : ' #94a3b8')};
`
