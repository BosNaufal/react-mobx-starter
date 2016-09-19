import React, { PropTypes } from 'react'
import { observer } from 'mobx-react';

import ListItem from './ListItem.js';

class ExamplePage extends React.Component {

  render() {
    let { counter } = this.props

    return (
      <div>
        <h3>Example Page</h3>
        <b>{ counter.counter }</b>
        <ul>
          { counter.list.map((item, i) => {
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
    this.props.counter.inc('halo')
  }

  dec() {
    // do action without argument
    this.props.counter.dec()
  }

  addList() {
    this.props.counter.addList()
  }

  removeList() {
    this.props.counter.removeList()
  }

}


export default observer(['counter'], ExamplePage);
