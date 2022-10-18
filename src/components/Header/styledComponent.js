import styled from 'styled-components'

export const Navbar = styled.nav`
  padding-left: 26px;
  padding-right: 26px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${props => (props.att ? '#212121' : 'white')};
`
export const NavListContainer = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
`
export const NavListItem = styled.li`
  display: flex;
  align-items: center;
  width: 24%;
  padding-right: 10px;
  justify-content: space-around;
  @media (min-width: 576px) and (max-width: 768px) {
    width: 30%;
  }
  @media (max-width: 576px) {
    width: 32%;
  }
`

export const NavLogo = styled.img`
  width: 120px;
`
export const Image = styled.img`
  width: 30px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const CustomLogOutButton = styled.button`
  border-width: 1px;
  border-style: solid;
  border-color: ${props => (props.att ? '#fff' : '#11627a')};
  cursor: pointer;
  color: ${props => (!props.att ? '#001100' : '#fff')};
  background-color: transparent;
  border-radius: 5px;
  padding: 10px 16px 10px 16px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const ModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`
export const PopupBtn = styled.button`
  color: ${props => (props.outline ? 'gray' : 'snow')};
  background-color: ${props => (props.outline ? 'transparent' : '#007ff7')};
  border: none;
  border: ${props => (props.outline ? `1px solid grey` : 'none')};
  padding: 10px;
  margin-right: 14px;
  cursor: pointer;
`
export const Modal = styled.div`
  background-color: ${props => (props.att ? '#001230' : 'snow')};
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`
export const PopupHeader = styled.p`
  color: ${props => (props.att ? 'white' : '#007ff6')};
  font-size: 20px;
  margin-bottom: 50px;
`
export const HamButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${props => (props.att ? 'snow' : '#030201')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const SmallMenuContainer = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  font-family: 'Roboto';
  margin: auto;

  @media (max-width: 576px) {
    width: 100%;
    font-size: 14px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`

export const SmallPara = styled.p`
  color: ${props => (props.att ? 'snow' : '#001111')};
  :hover {
    box-shadow: 0 1px 5px ${props => (props.att ? 'orange' : '#657eb5')};
    border-radius: 4px;
  }
`
