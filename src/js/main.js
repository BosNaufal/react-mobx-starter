
import React from 'react';
import ReactDOM from 'react-dom';

import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
// You can import your stores here~
import { counterStore } from './stores/';

import { Router, hashHistory } from 'react-router';
import routes from './router/map.js';


// Make the Stores become immutable
useStrict(true)

// You can pass your store to the <Provider />
ReactDOM.render(
  <Provider counter={ counterStore }>
    <Router history={ hashHistory } routes={ routes } />
  </Provider>,
  document.getElementById("app")
)
