import SettingsLayout from './SettingsLayout'
import ChangePassword from './ChangePassword'
import EditProfile from './EditProfile'
import ChangeAvatar from './ChangeAvatar'

export default (store) => ({
  path: 'settings',
  component: SettingsLayout,
  indexRoute: EditProfile,
  childRoutes: [
    EditProfile(store),
    ChangePassword(store),
    ChangeAvatar(store)
  ]
})
