import React from 'react'
import './ChangeAvatar.scss'
export default class ChangeAvatar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      avatarUrl: ''
    }
  }
  componentWillReceiveProps (nextProps) {
    const {fields: {avatar}} = nextProps
    if (avatar.value.length !== 0) {
      let reader = new FileReader()
      let file = avatar.value[0]
      reader.onloadend = () => {
        this.setState({
          avatarUrl: reader.result
        })
      }
      reader.readAsDataURL(file)
    }
  }

  render () {
    const {
      fields: {avatar},
      handleSubmit,
      resetForm,
      submitting,
      change,
      user
    } = this.props
    let fileName = user.avatar.split('/').pop()
    let imageUrl = avatar.value[0] ? this.state.avatarUrl : `/uploads/avatar/320/${fileName}`
    return (
      <div classNameNameName='row'>
        <div className='col-xs-offset-1 col-xs-10 col-md-offset-3 col-md-6'>
          <form onSubmit={handleSubmit} encType='multipart/form-data'>
            <div className='form-group text-center'>
              <img
                src={imageUrl}
                className='img-thumbnail user-profile-picture' />
            </div>
            <div className='text-center form-group'>
              {
                !avatar.value[0]
              ? <span className='btn btn-default btn-file'>
                  Виберіть зображення
                <input type='file' {...avatar} value={undefined} />
              </span>
              : <span className='avatar-btn'>
                <button className='btn btn-default' type='submit' disabled={submitting}>
                 Завантажити
                </button>
                <button className='btn btn-danger' onClick={resetForm}>
                 Відмінити
                </button>
              </span>
              }
            </div>
          </form>
        </div>
      </div>
    )
  }
}
