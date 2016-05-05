import axios from 'axios'

export const VALIDATE_USER_FIELDS = 'VALIDATE_USER_FIELDS'
export const VALIDATE_USER_FIELDS_SUCCESS = 'VALIDATE_USER_FIELDS_SUCCESS'
export const VALIDATE_USER_FIELDS_FAILURE = 'VALIDATE_USER_FIELDS_FAILURE'
export const RESET_VALIDATE_USER_FIELDS = 'RESET_VALIDATE_USER_FIELDS'

const ROOT_URL = location.href.indexOf('http://192.168.1.12') > 0 ? 'http://192.168.1.12:3000' : '/api'

export function validateUserFields (values) {
  const request = axios({
    method: 'post',
    url: `${ROOT_URL}/users/validate/fields`,
    data: values
  })
  return {
    type: VALIDATE_USER_FIELDS,
    payload: request
  }
}

export function validateUserFieldsFailure (error) {
  return {
    type: VALIDATE_USER_FIELDS_FAILURE,
    payload: error
  }
}

export function validateUserFieldsSuccess () {
  return {
    type: VALIDATE_USER_FIELDS_SUCCESS
  }
}

export function resetValidateUserFields () {
  return {
    type: RESET_VALIDATE_USER_FIELDS
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [VALIDATE_USER_FIELDS]: (state, action) => {
    return ({
      ...state,
      error: null, loading: true
    })
  },
  [VALIDATE_USER_FIELDS_SUCCESS]: (state, action) => {
    return ({
      ...state,
      error: null, loading: false
    })
  },
  [VALIDATE_USER_FIELDS_FAILURE]: (state, action) => {
    let error = action.payload.data || {message: action.payload.message}
    return ({
      ...state,
      error: error, loading: false
    })
  },
  [RESET_VALIDATE_USER_FIELDS]: (state, action) => {
    return ({
      ...state,
      error: null, loading: false
    })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------

const INITIAL_STATE = {error: null, loading: false}

export default function UserFieldsReducer (state = INITIAL_STATE, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
