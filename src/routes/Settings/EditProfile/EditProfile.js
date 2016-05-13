import React, {Component, PropTypes} from 'react'

export default class EditProfile extends Component {

  render () {
    const {
      fields: { username, email, name },
      handleSubmit,
      submitting,
      edit,
      user
    } = this.props
    return (
      <div className='settings-form-container col-xs-offset-1 col-xs-10 col-md-offset-4 col-md-4'>
        <form onSubmit={handleSubmit(edit)}>
          <div className={`form-group ${username.touched && username.error ? 'has-error' : ''}`}>
            <label htmlFor='username' className='control-label'>Імя користувача</label>
            <input
              id='username'
              placeholder='@username'
              type='text'
              className='form-control'
              {...username} />
            <div className='text-danger'>
              {username.touched ? username.error : ''}
            </div>
          </div>
          <div className={`form-group ${name.touched && name.error ? 'has-error' : ''}`}>
            <label htmlFor='name' className='control-label'>Імя</label>
            <input
              id='name'
              placeholder='@name'
              type='text'
              className='form-control'
              {...name} />
            <div className='text-danger'>
              {name.touched ? name.error : ''}
            </div>
          </div>
          <div className={`form-group ${email.touched && email.error ? 'has-error' : ''}`}>
            <label htmlFor='username' className='control-label'>Email</label>
            <input
              id='email'
              placeholder='@email'
              type='text'
              className='form-control'
              {...email} />
            <div className='text-danger'>
              {email.touched ? email.error : ''}
            </div>
          </div>
          <div className='form-group text-center'>
            <button type='submit' className='btn btn-primary submit' disabled={submitting}>
              <i className={submitting ? 'fa fa-spinner fa-spin' : 'fa fa-paper-plane'} />Зберегти профіль</button>
          </div>
        </form>
      </div>
    )
  }
}

EditProfile.propTypes = {
  fields: PropTypes.object,
  handleSubmit: PropTypes.func,
  resetMe: PropTypes.func,
  submitting: PropTypes.bool
}
