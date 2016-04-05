'use strict'
import React, { Component, PropTypes } from 'react';
import Document from '../Document/Document.jsx';
import Heading from '../Shared/Heading.jsx';
import VaticanID from '../../constants/VaticanID.js';
import HumanRightsID from '../../constants/HumanRightsID.js';
import mui from 'material-ui';
const CATHOLIC = 'Catholic Social Teaching';
const HUMANRIGHTS = 'International Human Rights Law';

class NotebookDocument extends Component {

  removeClick() {
    this.props.removeDocument();
  }

  documentTitle() {
    if (this.props.document.collection_id == HumanRightsID) {
      return HUMANRIGHTS;
    } else {
      return CATHOLIC;
    }
  }

  documentBodyStyle() {
    return {
      overflowY: "auto",
      clear: "both",
      marginBottom: '1em',
      
    };
  }

  render() {
    return (
      <mui.Paper zDepth={0}>
        <Heading title={ this.documentTitle() } />
        <Document
          documentId={ this.props.document.id }
          bodyStyle={ this.documentBodyStyle() }
        >
          <a href="#" className="remove-document" onClick={ this.removeClick.bind(this) }>
            <mui.FontIcon className="material-icons">clear</mui.FontIcon>
          </a>
        </Document>
      </mui.Paper>
    );
  }
}

NotebookDocument.propTypes = {
  documentId: React.PropTypes.string,
  removeDocument: React.PropTypes.func,
}

export default NotebookDocument;
