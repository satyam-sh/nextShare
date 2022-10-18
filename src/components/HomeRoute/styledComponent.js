import styled from 'styled-components'

export const HomeRouteMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background: ${props => (props.att ? '#181818' : '#ffffff')};
`

export const SideBar = styled.div`
  width: 20%;
  height: 110vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 20px;
`
export const SideBarListContainer = styled.ul`
  padding-left: 0;
  list-style: none;
`
export const SideBarListItem = styled.li`
  display: flex;
  align-items: center;
`

export const SideBarPara = styled.p`
  margin-left: 18px;
  color: ${props => (!props.att ? '#011010' : '#ffff')};
`

export const HomeContentContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const Image = styled.img`
  width: ${props => `${props.width}%`};
`
export const ContentDetails = styled.div`
  display: flex;
  flex-direction: column;
`
export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-position: center;
  padding: 20px;
  background-size: cover;
  height: 220px;
  @media screen and (max-width: 768px) {
    height: 180px;
  }
`

export const ContentPara = styled.p`
  font-size: 18px;
  color: gray;
  width: 80%;
`
export const GetItNowButton = styled.button`
  border: 1px solid #00111e;
  padding-top: 5px;
  padding-bottom: 5px;
  align-self: flex-start;
  padding-left: 10px;
  padding-right: 10px;
  background-color: transparent;
`
export const ContentImage = styled.img`
  width: 150px;
`
export const HomeContentResultsContainer = styled.div`
  padding: 20px;
  background-color: ${props => (props.att ? '#181818' : '#f9f9f9')};
  width: 100%;
`

export const ResponsiveContainer = styled.ul`
  display: flex;

  padding: 5px;
  padding-left: 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: ${props => (props.att ? '#181818' : '#f9f9f9')};
`
export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ContactUsSection = styled.div``

export const ContactPara = styled.p`
  color: grey;
  font-size: ${props => `${props.size}px`};
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-start;
  font-size: 24px;
  cursor: pointer;
`
export const Input = styled.input`
  padding: 6px;
  outline: none;
  width: 50%;
  height: 24px;
  background-color: ${props => (props.att ? ' #212121' : '#fff')};
  color: ${props => (props.att ? '#fff' : '#313131')};
  border: 1px solid #64748b;
  @media screen and (max-width: 768px) {
    width: 90%;
    height: 30px;
  }
`
export const SearchButton = styled.button`
  height: 24px;
  border: 1px solid gray;
  padding-right: 8px;
  padding-left: 8px;
  padding-top: 3px;
  padding-bottom: 5px;
  cursor: pointer;
  background-color: ${props => (props.att ? ' #313131' : 'snow')};
  color: ${props => (props.att ? '#fff' : '#313131')};
  @media screen and (max-width: 768px) {
    height: 30px;
  }
`
export const XContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
`
export const RetryBtn = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 4px;
  color: '#fff';
  background-color: #4f46e5;
`
export const FailHeader = styled.h1`
  font-size: 22px;
  color: 'grey';
`

export const SpareHeading = styled.h1`
  color: ${props => (props.att ? '#fff' : '#313131')};
  font-size: 25px;
`
