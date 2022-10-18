import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {AiOutlineClose} from 'react-icons/ai'

import {BsSearch} from 'react-icons/bs'
import {SiYoutubegaming} from 'react-icons/si'
import ContextSet from '../../context/context'
import VideoItems from '../VideoItemHomeR/index'
import SideBarRoute from '../SideBar/index'

import {
  HomeRouteMainContainer,
  HomeContentContainer,
  ContentDetails,
  ContentPara,
  GetItNowButton,
  TopContainer,
  ContentImage,
  CloseButton,
  Input,
  Image,
  HomeContentResultsContainer,
  ResponsiveContainer,
  SearchInputContainer,
  ContactPara,
  XContainer,
  FailHeader,
  SpareHeading,
  RetryBtn,
  SearchButton,
} from './styledComponent'

const apiStatus = {
  loading: 'L',
  success: 'S',
  failure: 'F',
  initial: 'I',
}

class Home extends Component {
  state = {
    videos: [],
    showBanner: true,
    searchQuery: '',
    status: apiStatus.initial,
  }

  componentDidMount() {
    this.homeVideoCall()
  }

  homeVideoCall = async () => {
    this.setState({status: apiStatus.loading})
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const {searchQuery} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchQuery}`
    const response = await fetch(url, options)
    if (response.ok) {
      const jsonResponse = await response.json()

      const Videos = jsonResponse.videos

      this.setState({videos: Videos, status: apiStatus.success})
    } else {
      this.setState({status: apiStatus.failure})
    }
  }

  HideBanner = () => {
    this.setState({showBanner: false})
  }

  updateSearchQuery = event => {
    this.setState({searchQuery: event.target.value})
  }

  FilterResult = () => {
    this.homeVideoCall()
  }

  repeatApiCall = () => {
    this.homeVideoCall()
  }

  failureView = () => (
    <ContextSet.Consumer>
      {value => {
        const {isDarkTheme} = value

        const image = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <XContainer>
            <Image width="70" src={image} alt="failure view" />
            <FailHeader>Oops! Something Went Wrong</FailHeader>
            <ContactPara size="17">
              We are having some trouble to complete your request.Please try
              again.
            </ContactPara>
            <RetryBtn onClick={this.repeatApiCall}>Retry</RetryBtn>
          </XContainer>
        )
      }}
    </ContextSet.Consumer>
  )

  renderViews = () => {
    const {status, videos} = this.state

    switch (status) {
      case apiStatus.loading:
        return (
          <ContextSet.Consumer>
            {value => {
              const {isDarkTheme} = value
              const colVal = !isDarkTheme ? '#000000' : '#fff'

              return (
                <XContainer data-testid="loader" style={{height: '50vh'}}>
                  <Loader
                    type="ThreeDots"
                    color={colVal}
                    height="70"
                    width="70"
                  />
                </XContainer>
              )
            }}
          </ContextSet.Consumer>
        )
      case apiStatus.success:
        if (videos.length === 0) {
          return (
            <XContainer>
              <Image
                width="60"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <SpareHeading size="20">No Search results found</SpareHeading>
              <ContactPara size="15">
                Try different key words or remove search filter
              </ContactPara>
              <RetryBtn onClick={this.repeatApiCall}>Retry</RetryBtn>
            </XContainer>
          )
        }
        return (
          <ContextSet.Consumer>
            {value => {
              const {isDarkTheme} = value
              return (
                <ResponsiveContainer att={isDarkTheme}>
                  {videos.map(el => (
                    <VideoItems key={el.id} detail={el} />
                  ))}
                </ResponsiveContainer>
              )
            }}
          </ContextSet.Consumer>
        )

      case apiStatus.failure:
        return this.failureView()
      default:
        return null
    }
  }

  render() {
    const {showBanner, searchQuery} = this.state

    return (
      <ContextSet.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <HomeRouteMainContainer att={isDarkTheme}>
              <SideBarRoute />
              <HomeContentContainer>
                {showBanner && (
                  <TopContainer data-testid="banner">
                    <ContentDetails>
                      <ContentImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <ContentPara>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </ContentPara>
                      <GetItNowButton>GET IT NOW</GetItNowButton>
                    </ContentDetails>
                    <CloseButton onClick={this.HideBanner} data-testid="close">
                      <AiOutlineClose />
                    </CloseButton>
                  </TopContainer>
                )}
                <HomeContentResultsContainer
                  att={isDarkTheme}
                  data-testid="home"
                >
                  <SearchInputContainer>
                    <Input
                      type="search"
                      att={isDarkTheme}
                      onChange={this.updateSearchQuery}
                      value={searchQuery}
                    />
                    <SearchButton
                      data-testid="searchButton"
                      att={isDarkTheme}
                      onClick={this.FilterResult}
                    >
                      <BsSearch />
                    </SearchButton>
                  </SearchInputContainer>
                  {this.renderViews()}
                </HomeContentResultsContainer>
              </HomeContentContainer>
            </HomeRouteMainContainer>
          )
        }}
      </ContextSet.Consumer>
    )
  }
}
export default Home
