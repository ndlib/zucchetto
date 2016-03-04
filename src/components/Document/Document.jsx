'use strict'
import React, { Component, PropTypes } from 'react';

import ItemStore from '../../store/ItemStore.js'
import Paragraph from './Paragraph.jsx'
import Title from './Title.jsx'

class Document extends Component {
  constructor(props) {
    super(props);
    this._item = ItemStore.getItem(props.documentId);
    this._parent = ItemStore.getItemParent(this._item);
  }

  paragraphs() {
    return ItemStore.getItemChildrenInOrder(this._parent).map(this.paragraph.bind(this))
  }

  paragraph(item) {
    return (<Paragraph key={ item.id } item={ item } />);
  }

  render() {
    return (
      <div>
        <Title item={this._parent} />
        { this.paragraphs() }
      </div>);
  }
}

Document.propTypes = {
  documentId: React.PropTypes.string.isRequired,
  item: React.PropTypes.object,
  parent: React.PropTypes.object,
}

export default Document;
