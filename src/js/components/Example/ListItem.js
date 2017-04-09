import React, { Component } from 'react'
import { observer } from 'mobx-react';

class ListItem extends Component {
  render() {
    let { item } = this.props
    return <li>{ item.text }</li>
  }
}

export default observer(ListItem);
