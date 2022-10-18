import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'

import Cookies from 'js-cookie'
import {BsFillLightningFill, BsFillBrightnessHighFill} from 'react-icons/bs'
import {FaRegLightbulb} from 'react-icons/fa'
import {FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import Popup from 'reactjs-popup'
import ContextSet from '../../context/context'
import {
  Navbar,
  NavListContainer,
  NavListItem,
  NavLogo,
  Image,
  CustomLogOutButton,
  PopupBtn,
  ModeButton,
  PopupHeader,
  Modal,
  SmallMenuContainer,
  HamButton,
  SmallPara,
} from './styledComponent'

class Header extends Component {
  state = {smallMenu: false}

  showHideMenu = () => {
    this.setState(prev => ({smallMenu: !prev.smallMenu}))
  }

  render() {
    const {history} = this.props
    const {smallMenu} = this.state
    return (
      <ContextSet.Consumer>
        {value => {
          const {isDarkTheme, changeMode, updateTabItem} = value
          const updateSideMenu = () => {
            updateTabItem('home')
          }
          const Logout = () => {
            Cookies.remove('jwt_token')
            history.replace('/login')
          }

          const LogoImage = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const changeTheme = () => {
            changeMode()
          }

          return (
            <Navbar att={isDarkTheme}>
              <NavListContainer>
                <NavListItem>
                  <Link to="/" onClick={updateSideMenu}>
                    <NavLogo src={LogoImage} alt="website logo" />
                  </Link>
                </NavListItem>
                <NavListItem>
                  <ModeButton
                    type="button"
                    onClick={changeTheme}
                    data-testid="theme"
                  >
                    {!isDarkTheme && (
                      <BsFillLightningFill
                        style={{width: '44px', height: '18px'}}
                      />
                    )}
                    {isDarkTheme && (
                      <BsFillBrightnessHighFill
                        style={{color: '#fff', width: '44px', height: '18px'}}
                      />
                    )}
                  </ModeButton>
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                  <HamButton att={isDarkTheme} onClick={this.showHideMenu}>
                    <GiHamburgerMenu style={{width: '44px', height: '18px'}} />
                  </HamButton>
                  <Popup
                    trigger={
                      <div>
                        <CustomLogOutButton att={isDarkTheme}>
                          Logout
                        </CustomLogOutButton>
                        <HamButton att={isDarkTheme}>
                          <FiLogOut style={{width: '44px', height: '18px'}} />
                        </HamButton>
                      </div>
                    }
                    modal
                    center
                  >
                    {close => (
                      <Modal att={isDarkTheme}>
                        <PopupHeader att={isDarkTheme}>
                          Are you sure, you want to logout
                        </PopupHeader>
                        <PopupBtn outline onClick={close}>
                          Cancel
                        </PopupBtn>
                        <PopupBtn onClick={Logout}>Confirm</PopupBtn>
                      </Modal>
                    )}
                  </Popup>
                </NavListItem>
              </NavListContainer>
              {smallMenu && (
                <SmallMenuContainer att={isDarkTheme}>
                  <Link to="/" style={{textDecoration: 'none'}}>
                    <SmallPara att={isDarkTheme}>Home</SmallPara>
                  </Link>
                  <Link to="/trending" style={{textDecoration: 'none'}}>
                    <SmallPara att={isDarkTheme}>Trending</SmallPara>
                  </Link>
                  <Link to="/gaming" style={{textDecoration: 'none'}}>
                    <SmallPara att={isDarkTheme}>Gaming</SmallPara>
                  </Link>
                  <Link to="/saved-videos" style={{textDecoration: 'none'}}>
                    <SmallPara att={isDarkTheme}>Saved Videos</SmallPara>
                  </Link>
                </SmallMenuContainer>
              )}
            </Navbar>
          )
        }}
      </ContextSet.Consumer>
    )
  }
}
export default withRouter(Header)
