'use strict'
import React, { Component, PropTypes } from 'react';
import ItemStore from '../../store/ItemStore.js';


class DocumentListItem extends Component {
  constructor(props) {
    super(props);

    this.primaryAction = this.primaryAction.bind(this);
    this._item = this.props.item;
    this._parent = ItemStore.getItemParent(this._item);
  }

  primaryAction(event) {
    this.props.primaryAction(event, this._item);
    event.preventDefault();
  }

  render() {
    return (
      <li style={{margin: "5px"}} >
        <div style={{cursor: 'pointer'}} onClick={this.primaryAction} >{this._parent.name}</div>
      </li>
    );
  }
}

DocumentListItem.propTypes = {
  item: React.PropTypes.object,
  primaryAction: React.PropTypes.func,
}

export default DocumentListItem;
