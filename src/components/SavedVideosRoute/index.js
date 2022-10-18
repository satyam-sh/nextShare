import {RiPlayListAddFill} from 'react-icons/ri'
import ContextSet from '../../context/context'
import SideBar from '../SideBar/index'
import SavedVideosItems from '../SavedVideosListItems/index'
import {
  MainContainer,
  SubContainer,
  HeaderContainer,
  SavedVideoContainerList,
  Paragraph,
  Image,
  SubContainerTrue,
  IconContainer,
  SpareHeader,
  Heading,
} from './styledComponent'

const SavedVideoRoute = () => {
  const NoItems = att => (
    <MainContainer>
      <SideBar />
      <SubContainer att={att}>
        <Image
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
          alt="no saved videos"
        />
        <SpareHeader att={att}>No saved videos found</SpareHeader>
        <Paragraph size={18} att={att}>
          You can save your videos while watching them
        </Paragraph>
      </SubContainer>
    </MainContainer>
  )

  return (
    <ContextSet.Consumer>
      {value => {
        const {savedList, isDarkTheme} = value
        console.log(savedList)

        if (savedList.length === 0) {
          return NoItems(isDarkTheme)
        }
        return (
          <MainContainer>
            <SideBar />
            <SubContainerTrue att={isDarkTheme} data-testid="savedVideos">
              <HeaderContainer att={isDarkTheme}>
                <IconContainer att={isDarkTheme}>
                  <RiPlayListAddFill style={{color: 'red'}} />
                </IconContainer>

                <Heading att={isDarkTheme}>Saved Videos</Heading>
              </HeaderContainer>
              <SavedVideoContainerList>
                {savedList.map(el => (
                  <SavedVideosItems key={el.id} detail={el} />
                ))}
              </SavedVideoContainerList>
            </SubContainerTrue>
          </MainContainer>
        )
      }}
    </ContextSet.Consumer>
  )
}
export default SavedVideoRoute
