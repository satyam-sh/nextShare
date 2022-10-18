import {Component} from 'react'
import {Link} from 'react-router-dom'

import {AiFillHome} from 'react-icons/ai'
import {MdWhatshot, MdPlaylistAdd} from 'react-icons/md'

import {SiYoutubegaming} from 'react-icons/si'
import ContextSet from '../../context/context'

import {
  SideBar,
  SideBarListContainer,
  SideBarListItem,
  SideBarPara,
  Image,
  ContactUsSection,
  ContactPara,
} from './styledComponent'

class SideBarRoute extends Component {
  render() {
    return (
      <ContextSet.Consumer>
        {value => {
          const {isDarkTheme, isActiveTab, updateTabItem} = value
          const updateTab = event =>
            updateTabItem(event.target.textContent.toLowerCase())

          return (
            <SideBar att={isDarkTheme}>
              <SideBarListContainer>
                <Link to="/" style={{textDecoration: 'none'}}>
                  <SideBarListItem
                    onClick={updateTab}
                    active={isActiveTab === 'home'}
                    att={isDarkTheme}
                  >
                    <AiFillHome />

                    <SideBarPara att={isDarkTheme}>Home</SideBarPara>
                  </SideBarListItem>
                </Link>
                <Link to="/trending" style={{textDecoration: 'none'}}>
                  <SideBarListItem
                    onClick={updateTab}
                    active={isActiveTab === 'trending'}
                    att={isDarkTheme}
                  >
                    <MdWhatshot />
                    <SideBarPara att={isDarkTheme}>Trending</SideBarPara>
                  </SideBarListItem>
                </Link>
                <Link to="/gaming" style={{textDecoration: 'none'}}>
                  <SideBarListItem
                    onClick={updateTab}
                    active={isActiveTab === 'gaming'}
                    att={isDarkTheme}
                  >
                    <SiYoutubegaming />

                    <SideBarPara att={isDarkTheme}>Gaming</SideBarPara>
                  </SideBarListItem>
                </Link>
                <Link to="/saved-videos" style={{textDecoration: 'none'}}>
                  <SideBarListItem
                    onClick={updateTab}
                    active={isActiveTab === 'saved videos'}
                    att={isDarkTheme}
                  >
                    <MdPlaylistAdd />
                    <SideBarPara att={isDarkTheme}>Saved Videos</SideBarPara>
                  </SideBarListItem>
                </Link>
              </SideBarListContainer>

              <ContactUsSection>
                <ContactPara size="18">CONTACT US</ContactPara>
                <Image
                  width="22"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
                <Image
                  width="22"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
                <Image
                  width="22"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
                <ContactPara size="14">
                  Enjoy! Now to see your channels and recommendations!
                </ContactPara>
              </ContactUsSection>
            </SideBar>
          )
        }}
      </ContextSet.Consumer>
    )
  }
}

export default SideBarRoute
