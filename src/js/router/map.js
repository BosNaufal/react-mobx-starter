
/**
  Refs:
  - https://github.com/reactjs/react-router/issues/2779
  - https://github.com/reactjs/react-router/blob/master/docs/guides/DynamicRouting.md
*/

const routes = {

  path: '/',
  component: require('../components/App.js').default,

  getIndexRoute(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, { component: require('../components/Home/').default })
    })
  },

  childRoutes: [
    {
      path: 'example',
      getIndexRoute(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, { component: require('../components/Example/').default })
        })
      },
    }
  ]

}

export default routes
