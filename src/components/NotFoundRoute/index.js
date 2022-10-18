import ContextSet from '../../context/context'
import {
  MainContainer,
  NotFoundContainer,
  Image,
  Paragraph,
  LastPara,
} from './styledComponent'
import SideBar from '../SideBar/index'
import Header from '../Header/index'

const NotFound = () => (
  <ContextSet.Consumer>
    {value => {
      const {isDarkTheme} = value
      const image = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <>
          <Header />
          <MainContainer att={isDarkTheme}>
            <SideBar />
            <NotFoundContainer att={isDarkTheme}>
              <Image src={image} alt="not found" />
              <Paragraph att={isDarkTheme}>Page Not Found</Paragraph>
              <LastPara att={isDarkTheme}>
                we are sorry, the page you requested could not be found.
              </LastPara>
            </NotFoundContainer>
          </MainContainer>
        </>
      )
    }}
  </ContextSet.Consumer>
)
export default NotFound
