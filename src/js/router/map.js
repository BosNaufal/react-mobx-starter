
/**
  Refs:
  - https://github.com/reactjs/react-router/issues/2779
  - https://github.com/reactjs/react-router/blob/master/docs/guides/DynamicRouting.md
*/

const routes = {

  path: '/',
  component: require('../components/App.js').default,
  getIndexRoute(nextState, callback) {
    require.ensure([], (require) => {
      callback(null, { component: require('../components/Home/').default })
    })
  },

  childRoutes: [
    {
      path: 'example',
      getIndexRoute(nextState, callback) {
        require.ensure([], (require) => {
          callback(null, { component: require('../components/Example/').default })
        })
      },
    }
  ]

}

export default routes
