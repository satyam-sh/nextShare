import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import SideBar from '../SideBar/index'
import ContextSet from '../../context/context'
import {
  MainContainer,
  SubContainer,
  Paragraph,
  FeaturesContainer,
  Para,
  ChannelContainer,
  Thumbnail,
  VideoAboutContainer,
  NamePara,
  Description,
  SubsPara,
  Buttons,
  IconButton,
  ButtonPara,
  FailImage,
  FailParaOne,
  FailParaTwo,
  Retry,
  XContainer,
  ReactPlayerContainer,
} from './styledComponent'

const apiConstants = {
  initialL: 'I',
  loading: 'L',
  success: 'S',
  failure: 'F',
}

class VideoItemDetailsRoute extends Component {
  state = {
    data: {},
    status: apiConstants.initialL,
    channel: {},
    isLiked: false,
    toUpdate: false,
  }

  componentDidMount() {
    this.doApiCall()
  }

  toUpdate = () => {
    this.setState(prev => ({toUpdate: !prev.toUpdate}))
  }

  likeUnlike = () => {
    this.setState({isLiked: 'LIKE'})
  }

  UnlikeLike = () => {
    this.setState({isLiked: 'UNLIKE'})
  }

  doApiCall = async () => {
    this.setState({status: apiConstants.loading})
    const {match} = this.props
    const {url} = match
    const apiUrl = `https://apis.ccbp.in${url}`
    const jwtToken = Cookies.get('jwt_token')
    const option = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, option)
    if (response.ok) {
      const jsonData = await response.json()
      this.setState({
        data: jsonData.video_details,
        status: apiConstants.success,
        channel: jsonData.video_details.channel,
      })
    } else {
      this.setState({status: apiConstants.failure})
    }
  }

  repeatApiCall = () => {
    this.doApiCall()
  }

  successView = () => {
    const {channel, isLiked, toUpdate} = this.state
    const {data} = this.state
    console.log(data)
    return (
      <ContextSet.Consumer>
        {value => {
          const {isDarkTheme, updateSavedList, savedList} = value
          const saveUnSave = () => {
            updateSavedList(data)
          }
          const y = savedList.find(el => el.id === data.id)
          let text
          if (y !== undefined) {
            text = 'Saved'
          } else {
            text = 'Save'
          }

          return (
            <>
              <ReactPlayerContainer>
                <ReactPlayer url={data.video_url} width="100%" controls />
              </ReactPlayerContainer>
              <Paragraph att={isDarkTheme}>{data.title}</Paragraph>
              <FeaturesContainer>
                <Para att={isDarkTheme}>
                  {data.view_count} views . {data.published_at}
                </Para>
                <Buttons>
                  <IconButton
                    onClick={this.likeUnlike}
                    col={isLiked === 'LIKE'}
                  >
                    <BiLike />
                    Like
                  </IconButton>
                  <IconButton
                    onClick={this.UnlikeLike}
                    col={isLiked === 'UNLIKE'}
                  >
                    <BiDislike />
                    Dislike
                  </IconButton>
                  <IconButton onClick={saveUnSave} col={text === 'Saved'}>
                    <MdPlaylistAdd />
                    <ButtonPara>{text}</ButtonPara>
                  </IconButton>
                </Buttons>
              </FeaturesContainer>
              <hr style={{width: '100%'}} />
              <ChannelContainer>
                <Thumbnail src={channel.profile_image_url} alt="channel logo" />
                <VideoAboutContainer>
                  <NamePara att={isDarkTheme}>{channel.name}</NamePara>
                  <SubsPara att={isDarkTheme}>
                    {channel.subscriber_count} subscribers
                  </SubsPara>
                  <Description att={isDarkTheme}>
                    {data.description}
                  </Description>
                </VideoAboutContainer>
              </ChannelContainer>
            </>
          )
        }}
      </ContextSet.Consumer>
    )
  }

  failureView = () => (
    <ContextSet.Consumer>
      {value => {
        const {isDarkTheme} = value
        const image = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <>
            <FailImage src={image} alt="failure view" />
            <FailParaOne att={isDarkTheme}>
              Oops! Something Went Wrong
            </FailParaOne>
            <FailParaTwo att={isDarkTheme}>
              We are having some trouble to complete your request. Please try
              again.
            </FailParaTwo>
            <Retry onCLick={this.repeatApiCall}>Retry</Retry>
          </>
        )
      }}
    </ContextSet.Consumer>
  )

  renderViews = () => {
    const {status} = this.state
    switch (status) {
      case apiConstants.loading:
        return (
          <ContextSet.Consumer>
            {value => {
              const {isDarkTheme} = value
              const colVal = isDarkTheme ? 'snow' : 'black'
              return (
                <XContainer data-testid="loader">
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
        return this.successView()
      case apiConstants.failure:
        return this.failureView()
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
            <MainContainer>
              <SideBar />
              <SubContainer att={isDarkTheme} data-testid="videoItemDetails">
                {this.renderViews()}
              </SubContainer>
            </MainContainer>
          )
        }}
      </ContextSet.Consumer>
    )
  }
}
export default VideoItemDetailsRoute
