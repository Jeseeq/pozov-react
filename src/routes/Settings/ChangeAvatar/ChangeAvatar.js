import React from 'react'
export const ChangeAvatar = () => (
  <div classNameName='row'>
    <div className='col-xs-offset-1 col-xs-10 col-md-offset-4 col-md-4'>
      <div className='form-group' show-errors=''>
        <label for='currentPassword'>Current Password</label>
        <input type='password' id='currentPassword' name='currentPassword' className='form-control' placeholder='Current Password' required='' />
        <div ng-messages='passwordForm.currentPassword.$error' role='alert' className='ng-active'>
          <p className='help-block error-text ng-scope' ng-message='required'>Your current password is required.</p>
        </div>
      </div>
    </div>
  </div>
)
export default ChangeAvatar
