import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'

export default class ChangePassword extends Component {

  static contextTypes = {
    router: PropTypes.object
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.user && nextProps.user.status === 'authenticated' &&
     !nextProps.user.error &&
     !nextProps.user.loading) {
      this.context.router.push('/')
    }
  }
  render () {
    const {
      fields: { username, email, password, confirmPassword },
      handleSubmit,
      submitting,
      signup
    } = this.props
    return (
      <div className='settings-form-container col-xs-offset-1 col-xs-10 col-md-offset-4 col-md-4'>
        <form>
          <div className={`form-group ${username.touched && username.error ? 'has-error' : ''}`}>
            <label htmlFor='username' className='control-label'>Імя</label>
            <input
              id='username'
              placeholder='@username'
              type='text'
              className='form-control'
              {...username} />
            <div className='col-sm-8 col-sm-offset-4  text-danger'>
              {username.touched ? username.error : ''}
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
            <div className='col-sm-8 col-sm-offset-4  text-danger'>
              {email.touched ? email.error : ''}
            </div>
          </div>
          <div className={`form-group ${password.touched && password.error ? 'has-error' : ''}`}>
            <label htmlFor='password' className='control-label'>Пароль*</label>
              <input
                id='password'
                type='password'
                className='form-control'
                {...password} />
            <div className='col-sm-8 col-sm-offset-4  text-danger'>
              {password.touched ? password.error : ''}
            </div>
          </div>
          <div className={`form-group ${confirmPassword.touched && confirmPassword.error ? 'has-error' : ''}`}>
            <label htmlFor='password' className='control-label'>Підтвердіть пароль*</label>
              <input
                id='password'
                type='password'
                className='form-control'
                {...confirmPassword} />
            <div className='col-sm-8 col-sm-offset-4  text-danger'>
              {confirmPassword.touched ? confirmPassword.error : ''}
            </div>
          </div>
          <div className='form-group text-center'>
            <button type='submit' className='btn btn-primary submit'>
              <i className={submitting ? 'fa fa-spinner fa-spin' : 'fa fa-paper-plane'} />Зберегти пароль</button>
          </div>
        </form>
      </div>
    )
  }
}

ChangePassword.propTypes = {
  fields: PropTypes.object,
  handleSubmit: PropTypes.func,
  resetMe: PropTypes.func,
  submitting: PropTypes.bool
}
