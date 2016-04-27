'use strict'
import React, { Component, PropTypes } from 'react';
import Document from '../Document/Document.jsx';
import Title from '../Document/Title.jsx';
import ParagraphJumpList from '../Document/ParagraphJumpList.jsx';

import Heading from '../Shared/Heading.jsx';
import VaticanID from '../../constants/VaticanID.js';
import HumanRightsID from '../../constants/HumanRightsID.js';
import mui from 'material-ui';
import CompareStore from '../../store/CompareStore.js';
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
        <div className='document-head'>
          <Heading title={ this.documentTitle() } />
          <div className='document-head'>
            <Title item={this.props.document} />
            <ParagraphJumpList
              paragraphs={ [] }
              primaryAction={ [] }
            />
          </div>

          <Document
            documentId={ this.props.document.id }
            bodyStyle={ this.documentBodyStyle() }
            selectedParagraphIds={ CompareStore.allItems() }
          />
        </div>
      </mui.Paper>
    );
  }
}

NotebookDocument.propTypes = {
  documentId: React.PropTypes.string,
  removeDocument: React.PropTypes.func,
}

export default NotebookDocument;
