
// React
import React from 'react';
import ReactDOM from 'react-dom';

// MobX
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
// You can import your stores here~
import { counterStore } from './stores/';

// React Router
import { Router, hashHistory } from 'react-router';
import routes from './router/map';

// Make the Stores become immutable
useStrict(true)

const stores = {
  counter: counterStore,
}

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

render()

if (module.hot) {
  // REACT ROUTER 3 Bugs!
  // https://github.com/ReactTraining/react-router/issues/2704#issuecomment-211352123
  // https://github.com/gaearon/react-hot-loader/issues/298#issuecomment-236510239
  module.hot.accept('./router/map', (newMapUrl) => {
    hotReloadCount++
    render()
  })
}
