import React, { Component } from 'react'
import { observer, inject } from 'mobx-react';

import ListItem from './ListItem.js';

class Example extends Component {

  render() {
    const store = this.props.ExampleStore
    console.log(this.props);

    return (
      <div>
        <h3>Example Page</h3>
        <b>{ store.counter }</b>
        <ul>
          { store.list.map((item, i) => {
              return <ListItem key={ i } item={ item } />
            })
          }
        </ul>
        <br />
        <button onClick={ this.inc.bind(this) } >+</button>
        <button onClick={ this.dec.bind(this) }>-</button>
        <button onClick={ this.addList.bind(this) } >Add List</button>
        <button onClick={ this.removeList.bind(this) }>Remove List</button>
      </div>
    );
  }

  inc() {
    // Pass an action with Argument
    this.props.ExampleStore.inc('halo')
  }

  dec() {
    // do action without argument
    this.props.ExampleStore.dec()
  }

  addList() {
    this.props.ExampleStore.addList()
  }

  removeList() {
    this.props.ExampleStore.removeList()
  }

}

export default inject("ExampleStore")(observer(Example));
