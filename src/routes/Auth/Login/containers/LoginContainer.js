import {
  login,
  loginSuccess,
  loginFailure
} from 'modules/user'

import {reduxForm} from 'redux-form'
import LoginForm from '../components/LoginForm'

// Client-side validation
const validate = values => {
  const errors = {}

  if (!values.username || values.username.trim() === '') {
    errors.username = 'Введіть імя користувача'
  }
  if (!values.password || values.password.trim() === '') {
    errors.password = 'Введіть пароль'
  }
  return errors
}

const validateAndSignInUser = (values, dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(login(values))
    .then((response) => {
      let data = response.payload.data
      if (response.payload.status !== 200) {
        dispatch(loginFailure(response.payload))
        // for redux-form
        reject(data)
      } else {
        dispatch(loginSuccess(response.payload))
        // for redux-form
        resolve()
      }
    })
  })
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = () => {
  return {
    signIn: validateAndSignInUser
  }
}

export default reduxForm({
  form: 'LoginForm',
  fields: ['username', 'password'],
  validate
},
  mapStateToProps,
  mapDispatchToProps
)(LoginForm)
