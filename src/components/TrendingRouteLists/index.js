import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {
  Heading,
  Paragraph,
  ListItem,
  Image,
  TextPartContainer,
} from './styledComponent'
import ContextSet from '../../context/context'

const TrendingRouteLists = props => {
  const {detail} = props
  const {channel} = detail

  const formattedTime = () => {
    const date = new Date(detail.published_at)
    const y = date.getFullYear()
    const m = date.getMonth()
    const d = date.getDate()

    const f = formatDistanceToNow(new Date(y, m, d))
    return f
  }

  return (
    <ContextSet.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <Link to={`/videos/${detail.id}`} style={{textDecoration: 'none'}}>
            <ListItem>
              <Image src={detail.thumbnail_url} alt="video thumbnail" />
              <TextPartContainer>
                <Heading att={isDarkTheme}>{detail.title}</Heading>
                <Paragraph att={isDarkTheme}>{channel.name}</Paragraph>
                <Paragraph att={isDarkTheme}>
                  {detail.view_count} views . {formattedTime()}
                </Paragraph>
              </TextPartContainer>
            </ListItem>
          </Link>
        )
      }}
    </ContextSet.Consumer>
  )
}
export default TrendingRouteLists
