
import {reduxForm} from 'redux-form'
import ChangePassword from './ChangePassword'

const validate = (values) => {
  const errors = {}
  if (!values.username || values.username.trim() === '') {
    errors.username = 'Введіть імя'
  }
  if (!values.email || values.email.trim() === '') {
    errors.email = 'Введіть email'
  }
  if (!values.password || values.password.trim() === '') {
    errors.password = 'Введіть пароль'
  }
  if (!values.confirmPassword || values.confirmPassword.trim() === '') {
    errors.confirmPassword = 'Введіть підтвердження паролю'
  }
  if (values.password && values.password.trim() !== '' &&
      values.confirmPassword && values.confirmPassword.trim() !== '' &&
      values.password !== values.confirmPassword) {
    errors.confirmPassword = 'Паролі не співпадають'
  }
  return errors
}


// function validateAndSignup (values, dispatch) {
//   return new Promise((resolve, reject) => {
//     dispatch(signup(values))
//     .then((response) => {
//       let data = response.payload.data
//       if (response.payload.status !== 200) {
//         dispatch(signupFailure(response.payload))
//         reject(data)
//       } else {
//         dispatch(signupSuccess(response.payload))
//         resolve()
//       }
//     })
//   })
// }
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default reduxForm({
  form: 'SignupForm',
  fields: ['username', 'email', 'password', 'confirmPassword'],
  validate
},
  mapStateToProps,
  mapDispatchToProps
)(ChangePassword)
