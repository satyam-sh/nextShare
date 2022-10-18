import {Link} from 'react-router-dom'

import ContextSet from '../../context/context'
import {Image, EachVideo, Details, Heading, Paragraph} from './styledCompoenent'

const SavedVideos = props => {
  const {detail} = props
  console.log(detail)
  return (
    <ContextSet.Consumer>
      {value => {
        const {isDarkTheme} = value

        return (
          <Link
            to={`/videos/${detail.id}`}
            style={{textDecoration: 'none', width: '100%'}}
          >
            <EachVideo>
              <Image src={detail.thumbnail_url} alt="video thumbnail" />
              <Details>
                <Heading att={isDarkTheme}>{detail.title}</Heading>
                <Paragraph att={isDarkTheme}>{detail.channel.name}</Paragraph>
                <Paragraph att={isDarkTheme}>
                  {detail.view_count} views . {detail.published_at}
                </Paragraph>
              </Details>
            </EachVideo>
          </Link>
        )
      }}
    </ContextSet.Consumer>
  )
}
export default SavedVideos
