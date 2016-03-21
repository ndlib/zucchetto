'use strict'
import React, { Component, PropTypes } from 'react';

import ItemStore from '../../store/ItemStore.js'
import Paragraph from './Paragraph.jsx'
import Title from './Title.jsx'
import DownloadPDF from './DownloadPDF.jsx'
import CurrentParagraph from './CurrentParagraph.jsx'
import CopyrightNotification from './CopyrightNotification.jsx'

class Document extends Component {
  constructor(props) {
    super(props);
    this._item = ItemStore.getItem(props.documentId);
    this._parent = ItemStore.getItemParent(this._item);
  }

  style() {
    return {
      overflow: "scroll",
      height: "400px",
      clear: "both",
    }
  }

  paragraphs() {
    return ItemStore.getItemChildrenInOrder(this._parent).map(this.paragraph.bind(this))
  }

  paragraph(item) {
    return (<Paragraph key={ item.id } item={ item } selectedItem={ this._item }/>);
  }

  render() {
    return (
      <div className="document">
        <div style={{ float: "right" }}>
          { this.props.children }
        </div>
        <Title item={this._parent} />
        <hr />
        <CopyrightNotification item={ this._parent } />
        <div style={ this.style() } >
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

export default Document;
