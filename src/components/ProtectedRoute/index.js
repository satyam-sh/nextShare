import {Redirect, Route} from 'react-router-dom'
import Cookies from 'js-cookie'
import Header from '../Header/index'

const ProtectedRoute = props => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <Route {...props} />
    </>
  )
}
export default ProtectedRoute
