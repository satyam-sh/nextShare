import React from 'react'

const ContextSet = React.createContext({
  isDarkTheme: false,
  changeMode: () => {},
  savedList: [],
  updateSavedList: () => {},
  removeSavedVideos: () => {},
  isActiveTab: 'home',
  updateTabItem: () => {},
})
export default ContextSet
