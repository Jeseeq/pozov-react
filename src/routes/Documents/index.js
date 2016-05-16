import DocumentLayout from './DocumentLayout'
import Page1 from './vidnovlennya'

export default (store) => ({
  path: 'document',
  component: DocumentLayout,
  childRoutes: [
    Page1(store)
  ]
})
