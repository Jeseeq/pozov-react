export default (store) => ({
  path: 'vidnovlennya-na-roboti',
  /*  Async getComponent is only invoked when route matches   */

  getComponents (nextState, cb) {
    require.ensure([], (require) => {
      cb(null, {
        preview: require('./Preview').default,
        explanation: require('./Explanation').default,
        main: require('./Main').default,
        title: require('./Title').default
      })
    })
  }
})
