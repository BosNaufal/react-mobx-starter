import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import DevTools from 'mobx-react-devtools'

// Is Dev?
const isDev = process.env.NODE_ENV !== 'production';

import '../../styles/main.sass';

class App extends Component {
  render() {
    let { children } = this.props

    return (
      <div>
        { children }
        { /* isDev &&  <DevTools /> */ }
        <DevTools />
      </div>
    );
  }
}

export default inject("AppStore")(observer(App));
