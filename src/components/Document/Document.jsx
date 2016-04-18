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
import ViewOriginal from './ViewOriginal.jsx';
import CompareStore from '../../store/CompareStore.js';
import ParagraphJumpList from './ParagraphJumpList.jsx';

class Document extends Component {
  constructor(props) {
    super(props);
    this._item = ItemStore.getItem(props.documentId);
    this._parent = ItemStore.getItemParent(this._item);
    if(this._parent == null){
      // If the item has no parents, we assume it is a parent.
      this._parent = this._item;
    }
    this.state = {
      selectedParagraph: null,
    }
    this.selectParagraph = this.selectParagraph.bind(this);
  }

  paragraphs() {
    return ItemStore.getItemChildrenInOrder(this._parent).map(this.paragraph.bind(this))
  }

  paragraph(item) {
    let selectedItem = null;
    // if we're looking at a whole document
    if(this._parent == this._item) {
      // check to see if current paragraph is in the store
      if(CompareStore.itemInCompare(item)) {
        selectedItem = item;
      }
    } else {
      selectedItem = this._item;
    }
    return (
      <div
        id={ 'paragraph-' + item.id }
        ref={ 'paragraph-' + item.id }
        key={ item.id }
      >
        <Paragraph
          item={ item }
          selectedItem={ selectedItem }
        />
      </div>
    );
  }

  selectParagraph(value) {
    this.setState({selectedParagraph: value});

    // Add up the heights of all paragraphs before this one.
    let prevSibling = ReactDOM.findDOMNode(this.refs['paragraph-' + value]).previousSibling;
    let offset = 0;
    while(prevSibling) {
      offset += prevSibling.scrollHeight;
      prevSibling = ReactDOM.findDOMNode(this.refs[ prevSibling.id]).previousSibling;
    }

    ReactDOM.findDOMNode(this.refs["document-" + this._parent.id]).scrollTop = offset;


  }



  render() {
    return (
      <div>
        <div className='document-head'>
          <div style={{ float: "right" }}>
            { this.props.children }
          </div>
          <Title item={this._parent} />
          <ParagraphJumpList
            paragraphs={ this.paragraphs() }
            primaryAction={ this.selectParagraph }
          />
          <CopyrightNotification item={ this._parent } />
          <ViewOriginal item={ this._parent } />
        </div>
        <div className="document" ref={"document-" + this._parent.id}>
          <DocumentType item={this._parent} />
          <div style={ this.props.bodyStyle } >
            { this.paragraphs() }
          </div>
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
    maxWidth: "40em", // Should put it between 70-75 characters at 1em (16px)
    margin: "0 auto",
  },
};

export default Document;
