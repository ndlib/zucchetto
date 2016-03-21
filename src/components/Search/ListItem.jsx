'use strict'
import React, { Component, PropTypes } from 'react';
import IDFromAtID from "../../modules/IDFromAtID.js";
import ItemStore from '../../store/ItemStore.js';
import Document from '../Document/Document.jsx';
import Paragraph from '../Document/Paragraph.jsx';
import DocumentCard from '../Document/DocumentCard.jsx';

import AddToCompare from '../Document/AddToCompare.jsx';

class ListItem extends Component{
  constructor(props) {
    super(props);

    this.state = {
      showDocument: false,
    };
    this.titleOnClick = this.titleOnClick.bind(this);
    this._item = ItemStore.getItem(IDFromAtID(props.item['@id']));
    this._parent = ItemStore.getItemParent(this._item);
  }

  titleOnClick() {
    this.setState({showDocument: !this.state.showDocument});
  }

  render() {
    if(!this._parent) {
      return null;
    }

    if(this.state.showDocument) {
      return (
        <DocumentCard item={ this._item } primaryAction={ this.titleOnClick }>
          <AddToCompare item={ this._item } />
          <hr />
          <Paragraph item={ this._item } />
        </DocumentCard>
      );
    } else {
      return (
        <DocumentCard item={ this._item } primaryAction={ this.titleOnClick }>
          <AddToCompare item={ this._item } />
        </DocumentCard>
      );
    }
  }
};

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default ListItem;
