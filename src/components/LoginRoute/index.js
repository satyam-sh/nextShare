import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ContextSet from '../../context/context'
import {
  LoginPageContainer,
  FormAndLogoContainer,
  Logo,
  Form,
  Label,
  Input,
  CheckboxInputContainer,
  Checkbox,
  CustomLoginButton,
  ErrorPara,
} from './styledComponent'

class LoginForm extends Component {
  state = {username: '', password: '', showPassword: false, errMsg: ''}

  submitForm = event => {
    event.preventDefault()
    this.doApiCall()
  }

  doApiCall = async () => {
    const {username, password} = this.state
    const User = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(User),
    }
    const response = await fetch(url, options)

    if (response.ok) {
      const jsonResponse = await response.json()

      Cookies.set('jwt_token', jsonResponse.jwt_token, {expires: 30})
      const {history} = this.props
      history.replace('/')
    } else {
      const jsonResponse = await response.json()

      this.setState({errMsg: jsonResponse.error_msg})
    }
  }

  updateUsername = event => {
    this.setState({username: event.target.value})
  }

  updatePassword = event => {
    this.setState({password: event.target.value})
  }

  showPassword = () => {
    this.setState(prev => ({showPassword: !prev.showPassword}))
  }

  render() {
    const {username, password, showPassword, errMsg} = this.state
    const type = showPassword ? 'text' : 'password'
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ContextSet.Consumer>
        {value => {
          const {isDarkTheme} = value
          const image = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginPageContainer att={isDarkTheme}>
              <FormAndLogoContainer att={isDarkTheme}>
                <Logo src={image} alt="website logo" />
                <Form onSubmit={this.submitForm}>
                  <Label htmlFor="username" att={isDarkTheme}>
                    USERNAME
                  </Label>
                  <Input
                    id="username"
                    type="text"
                    placeholder="Username"
                    onChange={this.updateUsername}
                    value={username}
                    att={isDarkTheme}
                  />
                  <Label htmlFor="password" att={isDarkTheme}>
                    PASSWORD
                  </Label>
                  <Input
                    id="password"
                    type={type}
                    placeholder="Password"
                    onChange={this.updatePassword}
                    value={password}
                  />
                  <CheckboxInputContainer>
                    <Checkbox
                      type="checkbox"
                      onClick={this.showPassword}
                      id="checkbox"
                    />
                    <Label att={isDarkTheme} htmlFor="checkbox">
                      Show Password
                    </Label>
                  </CheckboxInputContainer>
                  <CustomLoginButton type="submit">Login</CustomLoginButton>
                  {errMsg !== '' && <ErrorPara>{errMsg}</ErrorPara>}
                </Form>
              </FormAndLogoContainer>
            </LoginPageContainer>
          )
        }}
      </ContextSet.Consumer>
    )
  }
}
export default LoginForm
