// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import Home from './Home'
import LoginRoute from './Auth/Login'
import SignupRoute from './Auth/Signup'
import NotFound from './NotFound'
import Settings from './Settings'
import Restricted from './Restricted'
import Categories from './Categories'
import Documents from './Documents'
import {loginSuccess, getCurrentUser} from 'modules/user'

const checkUser = (store) => {
  store.dispatch(getCurrentUser())
  .then((response) => {
    if (!response.payload.data.message) {
      store.dispatch(loginSuccess(response.payload))
    }
  })
}

export const createRoutes = (store) => ({
  path: '/',
  onEnter: checkUser(store),
  component: CoreLayout,
  indexRoute: Home,
  childRoutes: [
    Documents(store),
    Categories(store),
    LoginRoute(store),
    SignupRoute(store),
    Restricted(Settings(store)),
    NotFound(store)
  ]
})

export default createRoutes
