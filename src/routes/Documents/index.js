export default (store) => ({
  path: 'documents',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const ChangeAvatar = require('./Documents').default
      /*  Return getComponent   */
      cb(null, ChangeAvatar)

    /* Webpack named bundle   */
    }, 'document')
  }
})
