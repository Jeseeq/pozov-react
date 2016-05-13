import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import {reducer as form} from 'redux-form'
import user from '../modules/user'
import validateUserFields from '../routes/Auth/Signup/modules/validateUserFields'

export const reducers = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    validateUserFields,
    user,
    form,
    router,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(reducers(store.asyncReducers))
}

export default reducers
