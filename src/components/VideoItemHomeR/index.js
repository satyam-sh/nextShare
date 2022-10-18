import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import ContextSet from '../../context/context'
import {
  ListItem,
  EachVideoDetailsContainer,
  VideoThumbnail,
  ChannelThumbnail,
  VideoDetails,
  Para,
  Paragraph,
  Spare,
} from './styledComponent'

const VideoItems = props => {
  let {detail} = props
  detail = {...detail, isSaved: false}

  const {channel} = detail

  return (
    <ContextSet.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <ListItem>
            <Link to={`/videos/${detail.id}`} style={{textDecoration: 'none'}}>
              <VideoThumbnail
                src={detail.thumbnail_url}
                alt="video thumbnail"
              />
              <EachVideoDetailsContainer>
                <Spare>
                  <ChannelThumbnail
                    src={channel.profile_image_url}
                    alt="channel logo"
                  />
                  <Paragraph isDarkTheme={isDarkTheme}>
                    {detail.title}
                  </Paragraph>
                </Spare>
                <VideoDetails>
                  <Para>{channel.name}</Para>
                  <Para>
                    {detail.view_count} views . {detail.published_at}
                  </Para>
                </VideoDetails>
              </EachVideoDetailsContainer>
            </Link>
          </ListItem>
        )
      }}
    </ContextSet.Consumer>
  )
}
export default VideoItems
