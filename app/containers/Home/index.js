import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';

import style from './index.sass'

class Home extends Component {

  render() {
    return (
      <div>
        <h3 className={style.title}>Home Page</h3>
        <a href="#/example">Example Page</a>
      </div>
    );
  }

}

export default inject("HomeStore")(observer(Home));
