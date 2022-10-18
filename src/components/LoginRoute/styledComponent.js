import styled from 'styled-components'

export const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => (props.att ? ' #181818' : ' #f9f9f9')};
`
export const FormAndLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  box-shadow: 0px 1px 16px gray;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: ${props => (props.att ? '#0f0f0f' : '#f1f1f1')};
  border-radius: 12px;
  @media screen and (max-width: 768px) {
    width: 92%;
  }
`

export const Logo = styled.img`
  width: 150px;
  margin-bottom: 20px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 14px;
  width: 80%;
`
export const Label = styled.label`
  color: ${props => (!props.att ? '#181818' : '#f8f8f8')};
  font-size: 14px;
  line-height: 18px;
`
export const Input = styled.input`
  padding: 8px;
  color: #64748b;
  outline: none;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  margin-bottom: 16px;
  background-color: transparent;
`
export const CheckboxInputContainer = styled.div`
  display: flex;
`
export const Checkbox = styled.input``

export const CustomLoginButton = styled.button`
  background-color: #1170c1;
  border: none;
  border-radius: 6px;
  color: #ffffff;
  padding-top: 6px;
  padding-bottom: 6px;
  margin-top: 30px;
  cursor: pointer;
`
export const ErrorPara = styled.p`
  color: #ff111f;
  font-size: 12px;
`
