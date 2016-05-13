
import {reduxForm} from 'redux-form'
import EditProfile from './EditProfile'
import {editProfile, editProfileSuccess, editProfileFailure} from 'modules/user'

const validate = (values) => {
  const errors = {}
  if (!values.username || values.username.trim() === '') {
    errors.username = 'Введіть імя користувача'
  }
  if (!values.email || values.email.trim() === '') {
    errors.email = 'Введіть email'
  }
  if (!values.name || values.name.trim() === '') {
    errors.name = 'Введіть імя'
  }
  return errors
}

function validateAndEdit (values, dispatch) {
  return new Promise((resolve, reject) => {
    dispatch(editProfile(values))
    .then((response) => {
      let data = response.payload.data
      if (response.payload.status !== 200) {
        dispatch(editProfileFailure(response.payload))
        reject(data)
      } else {
        dispatch(editProfileSuccess(response.payload))
        resolve()
      }
    })
  })
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
    initialValues: state.user.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    edit: validateAndEdit
  }
}

export default reduxForm({
  form: 'EditProfile',
  fields: ['username', 'email', 'name'],
  validate,
  validateAndEdit
},
  mapStateToProps,
  mapDispatchToProps
)(EditProfile)
