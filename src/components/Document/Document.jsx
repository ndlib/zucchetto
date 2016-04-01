'use strict'
import React, { Component, PropTypes } from 'react';

import ItemStore from '../../store/ItemStore.js';
import Paragraph from './Paragraph.jsx';
import Title from './Title.jsx';
import DownloadPDF from './DownloadPDF.jsx';
import CurrentParagraph from './CurrentParagraph.jsx';
import CopyrightNotification from './CopyrightNotification.jsx';
import CompareStore from '../../store/CompareStore.js';

class Document extends Component {
  constructor(props) {
    super(props);
    this._item = ItemStore.getItem(props.documentId);
    this._parent = ItemStore.getItemParent(this._item);
    if(this._parent == null){
      // If the item has no parents, we assume it is a parent.
      this._parent = this._item;
    }
  }

  paragraphs() {
    return ItemStore.getItemChildrenInOrder(this._parent).map(this.paragraph.bind(this))
  }

  paragraph(item) {
    let selectedItem = null;
    if(this._parent == this._item) {
      if(CompareStore.itemInCompare(item)) {
        selectedItem = item;
      }
    } else {
      selectedItem = this._item;
    }
    return (<Paragraph key={ item.id } item={ item } selectedItem={ selectedItem }/>);
  }

  render() {
    return (
      <div className="document">
        <div style={{ float: "right" }}>
          { this.props.children }
        </div>
        <Title item={this._parent} />
        <CopyrightNotification item={ this._parent } />
        <hr />
        <div style={ this.props.bodyStyle } >
          { this.paragraphs() }
        </div>
      </div>
    );
  }
}

Document.propTypes = {
  documentId: React.PropTypes.string.isRequired,
  item: React.PropTypes.object,
  parent: React.PropTypes.object,
}

Document.defaultProps = {
  bodyStyle: {
    fontSize: "16px",
    maxWidth: "32.5em", // Should put it between 70-75 characters at 1em (16px)
    margin: "0 auto",
  },
};

export default Document;
