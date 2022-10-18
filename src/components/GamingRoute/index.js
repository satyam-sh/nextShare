import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import SideBar from '../SideBar/index'
import GamingList from '../GamingItemList/index'
import ContextSet from '../../context/context'
import {
  MainContainer,
  GamingContainer,
  GamingHeaderContainer,
  GamingLogoContainer,
  Heading,
  Icon,
  GamingListContainer,
  XContainer,
  Para,
  ParaGraph,
  FailureContainer,
  Retry,
  Image,
} from './styledComponent'

const apiConstants = {
  initial: 'I',
  loading: 'L',
  success: 'S',
  failure: 'F',
}

class GamingRoute extends Component {
  state = {gamingVideos: [], status: apiConstants.initial}

  componentDidMount() {
    this.doGamingApiCall()
  }

  repeatApiCall = () => {
    this.doGamingApiCall()
  }

  doGamingApiCall = async () => {
    this.setState({status: apiConstants.loading})
    const url = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const jsonData = await response.json()

      this.setState({
        gamingVideos: jsonData.videos,
        status: apiConstants.success,
      })
    } else {
      this.setState({status: apiConstants.failure})
    }
  }

  renderViews = () => {
    const {status, gamingVideos} = this.state
    switch (status) {
      case apiConstants.loading:
        return (
          <ContextSet.Consumer>
            {value => {
              const {isDarkTheme} = value
              const colVal = isDarkTheme ? 'snow' : 'black'
              return (
                <XContainer data-testid="loader" att={isDarkTheme}>
                  <Loader
                    width={80}
                    height={80}
                    color={colVal}
                    type="ThreeDots"
                  />
                </XContainer>
              )
            }}
          </ContextSet.Consumer>
        )
      case apiConstants.success:
        return (
          <ContextSet.Consumer>
            {value => {
              const {isDarkTheme} = value
              return (
                <GamingListContainer att={isDarkTheme}>
                  {gamingVideos.map(el => (
                    <GamingList key={el.id} detail={el} />
                  ))}
                </GamingListContainer>
              )
            }}
          </ContextSet.Consumer>
        )
      case apiConstants.failure:
        return (
          <ContextSet.Consumer>
            {value => {
              const {isDarkTheme} = value
              const image = isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
              return (
                <FailureContainer att={isDarkTheme}>
                  <Image src={image} alt="failure view" />
                  <ParaGraph att={isDarkTheme}>
                    Oops! Something Went Wrong
                  </ParaGraph>
                  <Para att={isDarkTheme}>
                    We are having some trouble to complete your request. Please
                    try again.
                  </Para>
                  <Retry onClick={this.repeatApiCall}>Retry</Retry>
                </FailureContainer>
              )
            }}
          </ContextSet.Consumer>
        )
      default:
        return null
    }
  }

  render() {
    return (
      <ContextSet.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <MainContainer att={isDarkTheme}>
              <SideBar />
              <GamingContainer data-testid="gaming" att={isDarkTheme}>
                <GamingHeaderContainer att={isDarkTheme}>
                  <GamingLogoContainer att={isDarkTheme}>
                    <Icon>
                      <SiYoutubegaming />
                    </Icon>
                  </GamingLogoContainer>
                  <Heading att={isDarkTheme}>Gaming</Heading>
                </GamingHeaderContainer>
                {this.renderViews()}
              </GamingContainer>
            </MainContainer>
          )
        }}
      </ContextSet.Consumer>
    )
  }
}
export default GamingRoute
