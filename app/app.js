
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'mobx-react';


// Stores
import stores from './store';

// Router Maps
import routes from './routes';

// You can pass your store to the <Provider />
let hotReloadCount = 0
const render = () => {
  ReactDOM.render(
    <Provider {...stores}>
      <Router key={hotReloadCount} history={hashHistory} routes={routes} />
    </Provider>,
    document.getElementById("app")
  )
}

// First Render
render()

// Hot Reload Render
if (module.hot) {
  // REACT ROUTER 3 Bugs!
  // https://github.com/ReactTraining/react-router/issues/2704#issuecomment-211352123
  // https://github.com/gaearon/react-hot-loader/issues/298#issuecomment-236510239
  module.hot.accept('./routes', (newMapUrl) => {
    hotReloadCount++
    render()
  })
}
