import React, { PropTypes } from 'react'
import { observer } from 'mobx-react';

class ListItem extends React.Component {
  render() {
    let { item } = this.props
    return <li>{ item.text }</li>
  }
}

export default observer(ListItem);
