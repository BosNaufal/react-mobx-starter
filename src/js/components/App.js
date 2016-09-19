import React from 'react';

import '../../sass/global/main.sass';

class App extends React.Component {
  render() {
    let { children } = this.props

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <header>
              <h1>React MobX Starter</h1>
            </header>
            { children }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
