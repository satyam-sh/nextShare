import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import ContextSet from './context/context'
import ProtectedRoute from './components/ProtectedRoute/index'
import LoginForm from './components/LoginRoute/index'

import Home from './components/HomeRoute/index'
import TrendingRoute from './components/TrendingRoute/index'
import GamingRoute from './components/GamingRoute/index'
import VideoItemDetailsRoute from './components/VideoItemDetailsRoute/index'
import SavedVideosRoute from './components/SavedVideosRoute/index'
import NotFound from './components/NotFoundRoute/index'

import './App.css'

// Replace your code here
class App extends Component {
  state = {isDarkTheme: false, videoList: [], activeTab: 'home'}

  changeMode = () => {
    this.setState(prev => ({isDarkTheme: !prev.isDarkTheme}))
  }

  updateVideos = x => {
    const {videoList} = this.state
    const y = videoList.find(el => el.id === x.id)

    if (y === undefined) {
      this.setState(prev => ({
        videoList: [...prev.videoList, {...x, isSaved: true}],
      }))
    } else {
      const updatedList = videoList.filter(el => el.id !== x.id)
      this.setState({
        videoList: updatedList,
      })
    }
  }

  updateTab = val => {
    this.setState({activeTab: val})
  }

  render() {
    const {isDarkTheme, videoList, activeTab} = this.state
    console.log(videoList)
    return (
      <ContextSet.Provider
        value={{
          isDarkTheme,
          changeMode: this.changeMode,
          savedList: videoList,
          updateSavedList: this.updateVideos,
          removeSavedVideos: this.removeSavedVideos,
          isActiveTab: activeTab,
          updateTabItem: this.updateTab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosRoute}
          />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetailsRoute}
          />

          <Route exact path="/bad-path" component={NotFound} />
          <Redirect to="/bad-path" />
        </Switch>
      </ContextSet.Provider>
    )
  }
}
export default App
