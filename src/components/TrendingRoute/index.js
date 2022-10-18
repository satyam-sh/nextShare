import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {FaHotjar} from 'react-icons/fa'
import ContextSet from '../../context/context'
import SideBarRoute from '../SideBar/index'
import {
  MainContainer,
  SubContainer,
  RouteContainer,
  TrendingHeaderContainer,
  Heading,
  ResultsContainer,
  Image,
  Icon,
  ParaOne,
  ParaTwo,
  Retry,
} from './styledComponent'
import TrendingRouteLists from '../TrendingRouteLists/index'
import {XContainer} from '../SideBar/styledComponent'

const apiConstants = {
  initial: 'I',
  loading: 'L',
  success: 'S',
  failure: 'F',
}

class TrendingRoute extends Component {
  state = {trendingVideos: [], apiStatus: apiConstants.initial}

  componentDidMount() {
    this.doTrendingSectionApiCall()
  }

  retryApiCall = () => {
    this.doTrendingSectionApiCall()
  }

  doTrendingSectionApiCall = async () => {
    this.setState({apiStatus: apiConstants.loading})
    const url = 'https://apis.ccbp.in/videos/trending'
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
        trendingVideos: jsonData.videos,
        apiStatus: apiConstants.success,
      })
    } else {
      this.setState({apiStatus: apiConstants.failure})
    }
  }

  FailureView = () => (
    <ContextSet.Consumer>
      {value => {
        const {isDarkTheme} = value

        const image = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

        return (
          <XContainer>
            <Image src={image} alt="failure view" />
            <ParaOne att={isDarkTheme}>Oops! Something Went Wrong</ParaOne>
            <ParaTwo att={isDarkTheme}>We are having some trouble</ParaTwo>
            <Retry onClick={this.retryApiCall}>Retry</Retry>
          </XContainer>
        )
      }}
    </ContextSet.Consumer>
  )

  renderViews = () => {
    const {apiStatus, trendingVideos} = this.state
    switch (apiStatus) {
      case apiConstants.loading:
        return (
          <ContextSet.Consumer>
            {value => {
              const {isDarkTheme} = value
              const colVal = isDarkTheme ? 'snow' : 'black'
              return (
                <XContainer data-testid="loader">
                  <Loader
                    height={80}
                    width={80}
                    type="ThreeDots"
                    color={colVal}
                  />
                </XContainer>
              )
            }}
          </ContextSet.Consumer>
        )
      case apiConstants.success:
        return (
          <>
            {trendingVideos.map(el => (
              <TrendingRouteLists key={el.id} detail={el} />
            ))}
          </>
        )
      case apiConstants.failure:
        return this.FailureView()
      default:
        return null
    }
  }

  render() {
    const {trendingVideos} = this.state

    return (
      <ContextSet.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <MainContainer att={isDarkTheme}>
              <SubContainer att={isDarkTheme}>
                <SideBarRoute />
                <RouteContainer
                  data-testid="trending"
                  isDarkTheme={isDarkTheme}
                >
                  <TrendingHeaderContainer isDarkTheme={isDarkTheme}>
                    <Icon att={isDarkTheme}>
                      <FaHotjar style={{color: 'red'}} />
                    </Icon>
                    <Heading att={isDarkTheme}>Trending</Heading>
                  </TrendingHeaderContainer>
                  <ResultsContainer isDarkTheme={isDarkTheme}>
                    {this.renderViews()}
                  </ResultsContainer>
                </RouteContainer>
              </SubContainer>
            </MainContainer>
          )
        }}
      </ContextSet.Consumer>
    )
  }
}
export default TrendingRoute
