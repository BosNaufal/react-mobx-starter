
/**
  Refs:
  - https://github.com/reactjs/react-router/issues/2779
  - https://github.com/reactjs/react-router/blob/master/docs/guides/DynamicRouting.md
*/

const routes = {

  path: '/',
  component: require('containers/App/').default,
  getIndexRoute(nextState, callback) {
    require.ensure([], (require) => {
      callback(null, { component: require('containers/Home/').default })
    })
  },

  childRoutes: [
    {
      path: 'example',
      getIndexRoute(nextState, callback) {
        require.ensure([], (require) => {
          callback(null, { component: require('containers/Example/').default })
        })
      },
    }
  ]

}

export default routes
