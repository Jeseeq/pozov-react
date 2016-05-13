import {reduxForm, reset} from 'redux-form'
import ChangeAvatar from './ChangeAvatar'
import {changeAvatar, changeAvatarFailure, changeAvatarSuccess} from 'modules/user'

function validateAndChange (values, dispatch) {
  var data = new FormData()
  data.append('avatar', values.avatar[0])
  return new Promise((resolve, reject) => {
    dispatch(changeAvatar(data))
    .then((response) => {
      let data = response.payload.data
      if (response.payload.status !== 200) {
        dispatch(changeAvatarFailure(response.payload))
        reject(data)
      } else {
        dispatch(changeAvatarSuccess(response.payload))
        dispatch(reset('file'))
        resolve()
      }
    })
  })
}
const mapStateToProps = (state) => ({
  user: state.user.user
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: validateAndChange
})
export default reduxForm({
  form: 'file',
  fields: ['avatar'],
  validateAndChange
},
mapStateToProps,
mapDispatchToProps
)(ChangeAvatar)
