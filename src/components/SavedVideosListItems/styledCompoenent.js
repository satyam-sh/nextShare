import styled from 'styled-components'

export const EachVideo = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;

  width: 100%;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`
export const Image = styled.img`
  width: 340px;
  height: 200px;
  flex-shrink: 1;

  @media screen and (max-width: 768px) {
    width: 45%;
    height: auto;
  }
`

export const Details = styled.div`
  width: 45%;
  margin-left: 12px;
  @media screen and (max-width: 768px) {
    width: 55%;
    margin-left: 20px;
  }
`

export const Heading = styled.p`
  font-size: 18px;
  color: ${props => (props.att ? '#ebebeb' : '#313131')};
  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 0;
  }
`
export const Paragraph = styled.p`
  font-size: 14px;
  color: ${props => (props.att ? ' #cbd5e1' : ' #7e858e')};
  @media screen and (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 0;
  }
`
