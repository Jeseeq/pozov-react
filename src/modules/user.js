import axios from 'axios'

export const CHANGE_PASSWORD = 'CHANGE_PASSWORD'
export const CHANGE_PASSWORD_SUCCESS = 'CHANGE_PASSWORD_SUCCESS'
export const CHANGE_PASSWORD_FAILURE = 'CHANGE_PASSWORD_FAILURE'

export const CHANGE_AVATAR = 'CHANGE_AVATAR'
export const CHANGE_AVATAR_SUCCESS = 'CHANGE_AVATAR_SUCCESS'
export const CHANGE_AVATAR_FAILURE = 'CHANGE_AVATAR_FAILURE'

export const EDIT_PROFILE = 'EDIT_PROFILE'
export const EDIT_PROFILE_SUCCESS = 'EDIT_PROFILE_SUCCESS'
export const EDIT_PROFILE_FAILURE = 'EDIT_PROFILE_FAILURE'

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const GET_CURRENT_USER = 'GET_CURRENT_USER'
export const LOGOUT = 'LOGOUT'

const ROOT_URL = location.href.indexOf('http://192.168.1.12') > 0 ? 'http://192.168.1.12:3000' : '/api'
export function changeAvatar (image) {
  const request = axios({
    method: 'post',
    url: `${ROOT_URL}/users/picture`,
    data: image,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
  return {
    type: CHANGE_AVATAR,
    payload: request
  }
}
export function changeAvatarSuccess (user) {
  return {
    type: CHANGE_AVATAR_SUCCESS,
    payload: user
  }
}
export function changeAvatarFailure (user) {
  return {
    type: CHANGE_AVATAR_FAILURE,
    payload: user
  }
}
export function editProfile (user) {
  const request = axios({
    method: 'put',
    url: `${ROOT_URL}/users`,
    data: user
  })
  return {
    type: EDIT_PROFILE,
    payload: request
  }
}
export function editProfileSuccess (user) {
  return {
    type: EDIT_PROFILE_SUCCESS,
    payload: user
  }
}
export function editProfileFailure (error) {
  return {
    type: EDIT_PROFILE_FAILURE,
    payload: error
  }
}
export function changePassword (data) {
  const request = axios({
    method: 'put',
    url: `${ROOT_URL}/users/password`,
    data: data
  })
  return {
    type: CHANGE_PASSWORD,
    payload: request
  }
}
export function changePasswordSuccess (user) {
  return {
    type: CHANGE_PASSWORD_SUCCESS,
    payload: user
  }
}
export function changePasswordFailure (error) {
  return {
    type: CHANGE_PASSWORD_FAILURE,
    payload: error
  }
}
export function signup (formValues) {
  const request = axios({
    method: 'post',
    url: `${ROOT_URL}/users/signup`,
    data: formValues
  })
  return {
    type: SIGNUP_REQUEST,
    payload: request
  }
}
export function signupSuccess (user) {
  return {
    type: SIGNUP_SUCCESS,
    payload: user
  }
}
export function signupFailure (error) {
  return {
    type: SIGNUP_FAILURE,
    payload: error
  }
}

export function login (formValues) {
  const request = axios({
    method: 'post',
    url: `${ROOT_URL}/users/signin`,
    data: formValues
  })
  return {
    type: LOGIN_REQUEST,
    payload: request
  }
}
export function loginSuccess (user) {
  return {
    type: LOGIN_SUCCESS,
    payload: user
  }
}
export function loginFailure (error) {
  return {
    type: LOGIN_FAILURE,
    payload: error
  }
}
export function logout () {
  const request = axios({
    method: 'post',
    url: `${ROOT_URL}/users/logout`
  })
  return {
    type: LOGOUT,
    payload: request
  }
}
export function getCurrentUser () {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/users/get/user/from/cookie`
  })
  return {
    type: GET_CURRENT_USER,
    payload: request
  }
}
// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CHANGE_AVATAR]: (state, action) => {
    return ({
      ...state,
      error: null,
      loading: true
    })
  },
  [CHANGE_AVATAR_SUCCESS]: (state, action) => {
    return ({
      ...state,
      error: null,
      loading: false,
      user: action.payload.data
    })
  },
  [CHANGE_AVATAR_FAILURE]: (state, action) => {
    let error = action.payload.data || {message: action.payload.message}
    return ({
      ...state,
      error: error,
      loading: true
    })
  },
  [EDIT_PROFILE]: (state, action) => {
    return ({
      ...state,
      error: null,
      loading: true
    })
  },
  [EDIT_PROFILE_SUCCESS]: (state, action) => {
    return ({
      ...state,
      user: action.payload.data,
      error: null,
      loading: false
    })
  },
  [EDIT_PROFILE_FAILURE]: (state, action) => {
    let error = action.payload.data || {message: action.payload.message}
    return ({
      ...state,
      error: error,
      loading: true
    })
  },
  [SIGNUP_REQUEST]: (state, action) => {
    return ({
      ...state,
      user: null,
      status: 'signup',
      error: null,
      loading: true
    })
  },
  [SIGNUP_SUCCESS]: (state, action) => {
    return ({
      ...state,
      user: action.payload.data,
      status: 'authenticated',
      error: null,
      loading: false
    })
  },
  [SIGNUP_FAILURE]: (state, action) => {
    let error = action.payload.data || {message: action.payload.message}
    return ({
      ...state,
      user: null,
      status: 'signup',
      error: error,
      loading: false
    })
  },
  [LOGIN_REQUEST]: (state, action) => {
    return ({
      ...state,
      user: null,
      status: 'signin',
      error: null,
      loading: true
    })
  },
  [LOGIN_SUCCESS]: (state, action) => {
    return ({
      ...state,
      user: action.payload.data,
      status: 'authenticated',
      error: null,
      loading: false
    })
  },
  [LOGIN_FAILURE]: (state, action) => {
    let error = action.payload.data || {message: action.payload.message}
    return ({
      ...state,
      user: null,
      status: 'signin',
      error: error,
      loading: false
    })
  },
  [LOGOUT]: (state, action) => {
    return ({
      ...state,
      user: null,
      status: 'signin',
      error: null,
      loading: false
    })
  },
  [GET_CURRENT_USER]: (state, action) => {
    return {
      ...state
    }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------

const INITIAL_STATE = {
  user: null,
  status: null,
  error: null,
  loading: false
}
export default function userReducer (state = INITIAL_STATE, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
