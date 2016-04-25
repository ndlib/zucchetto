'use strict'
import React, { Component, PropTypes } from 'react';
import ItemStore from '../../store/ItemStore.js';
import DocumentParagraphListItem from './DocumentParagraphListItem.jsx';

class DocumentListItem extends Component {
  constructor(props) {
    super(props);

    this.primaryAction = this.primaryAction.bind(this);
    // this.paragraphs = this.paragraphs.bind(this);

    this._item = this.props.item;
    this._subItems = this.props.subItems;
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

DocumentListItem.propTypes = {
  item: React.PropTypes.object,
  subItems: React.PropTypes.array,
  primaryAction: React.PropTypes.func,
}

export default DocumentListItem;
