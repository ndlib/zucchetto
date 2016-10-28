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
import AddToCompare from './AddToCompare.jsx';
import FootNotes from './FootNotes.jsx';

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
    let highlighted = (this.props.highlightedParagraphIds.indexOf(item.id) !== -1)

    if(!highlighted && !this.props.showOnlySelected) {
      return (<div key={ item.id }
        style={{
          backgroundColor: '#E8E8E8',
          color: '#999999',
          fontSize: '.7em',
          margin: '4px 0',
          padding: '2px 0',
          textAlign: 'center',
        }}
      ><i>(paragraph not displayed)</i></div>)
    }

    return (
      <div
        id={ 'paragraph-' + item.id }
        ref={ 'paragraph-' + item.id }
        key={ item.id }
      >
        <Paragraph
          item={ item }
          selected={ selected }
          highlighted = { highlighted }
          showCheckBoxes={ ( item.metadata.type_of_text && item.metadata.type_of_text.values[0].value === 'BodyText' && this.props.showCompareButton ) }
        />
      </div>
    );
  }

  render() {
    return (
      <div className="document" style={{ backgroundColor: "inherit" }}>
        <div style={ this.props.bodyStyle } >
          { this.props.children }
          <DocumentType item={this._parent} />
          { this.paragraphs() }
          <FootNotes item={ this._parent } />
          <CopyrightNotification item={ this._parent } />
        </div>
      </div>
    );
  }
}

Document.propTypes = {
  documentId: React.PropTypes.string.isRequired,
  bodyStyle: React.PropTypes.object,
  selectedParagraphIds: React.PropTypes.array,
  highlightedParagraphIds: React.PropTypes.array,
  showOnlySelected: React.PropTypes.bool,
  showCompareButton: React.PropTypes.bool,
}

Document.defaultProps = {
  bodyStyle: {
    fontSize: "16px",
    maxWidth: "40em", // Should put it between 70-75 characters at 1em (16px)
    margin: "0 auto",
  },
  showOnlySelected: false,
  showCompareButton: true,
  selectedParagraphIds: [],
  highlightedParagraphIds: []
};

export default Document;
