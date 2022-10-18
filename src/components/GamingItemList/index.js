import {Link} from 'react-router-dom'
import ContextSet from '../../context/context'

import {GamingListItem, ParagraphTwo, Paragraph, Image} from './styledComponent'

const GamingList = props => {
  const {detail} = props

  return (
    <ContextSet.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <GamingListItem>
            <Link to={`/videos/${detail.id}`} style={{textDecoration: 'none'}}>
              <Image src={detail.thumbnail_url} alt="video thumbnail" />
              <Paragraph att={isDarkTheme}>{detail.title}</Paragraph>
              <ParagraphTwo att={isDarkTheme}>
                {detail.view_count} Watching Worldwide
              </ParagraphTwo>
            </Link>
          </GamingListItem>
        )
      }}
    </ContextSet.Consumer>
  )
}
export default GamingList
