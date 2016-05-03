'use strict'
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import ItemStore from '../../store/ItemStore.js';
import Paragraph from './Paragraph.jsx';
import Title from './Title.jsx';
import DownloadPDF from './DownloadPDF.jsx';
import DocumentType from './DocumentType.jsx';
import CurrentParagraph from './CurrentParagraph.jsx';
import CopyrightNotification from './CopyrightNotification.jsx';

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
    let selected = (this.props.selectedParagraphIds.indexOf(item.id) !== -1)

    return (
      <div
        id={ 'paragraph-' + item.id }
        ref={ 'paragraph-' + item.id }
        key={ item.id }
      >
        <Paragraph
          item={ item }
          selected={ selected }
        />
      </div>
    );
  }

  render() {
    return (
      <div className="document" >
        <div style={ this.props.bodyStyle } >
          <CopyrightNotification item={ this._parent } />
          <DocumentType item={this._parent} />
          { this.paragraphs() }
        </div>
      </div>
    );
  }
}

Document.propTypes = {
  documentId: React.PropTypes.string.isRequired,
  bodyStyle: React.PropTypes.object,
  selectedParagraphIds: React.PropTypes.array,
}

Document.defaultProps = {
  bodyStyle: {
    fontSize: "16px",
    maxWidth: "40em", // Should put it between 70-75 characters at 1em (16px)
    margin: "0 auto",
  },
};

export default Document;
