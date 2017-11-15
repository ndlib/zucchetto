'use strict'
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DocumentParagraphListItem extends Component {
  constructor(props) {
    super(props);

    this.primaryAction = this.primaryAction.bind(this);
    this._item = this.props.item;
  }

  primaryAction(event) {
    this.props.primaryAction(event, this._item);
    event.preventDefault();
  }

  render() {
    return (
      <li style={{margin: "5px"}} >
        <div style={{cursor: 'pointer'}} onClick={this.primaryAction} >{this._item.name}</div>
      </li>
    );
  }
}

DocumentParagraphListItem.propTypes = {
  item: PropTypes.object,
  primaryAction: PropTypes.func,
}

export default DocumentParagraphListItem;
