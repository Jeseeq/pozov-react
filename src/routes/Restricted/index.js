import Restricted from './Restricted'

export default (children) => ({
  component: Restricted,
  childRoutes: [
    children
  ]
})
