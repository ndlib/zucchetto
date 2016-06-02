'use strict'
import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Document from '../Document/Document.jsx';
import CopyrightNotification from '../Document/CopyrightNotification.jsx';
import Title from '../Document/Title.jsx';
import ParagraphJumpList from '../Document/ParagraphJumpList.jsx';
import Paragraph from '../../components/Document/Paragraph.jsx';
import Heading from '../Shared/Heading.jsx';
import VaticanID from '../../constants/VaticanID.js';
import HumanRightsID from '../../constants/HumanRightsID.js';
import mui from 'material-ui';
import ItemStore from '../../store/ItemStore.js';
import CompareStore from '../../store/CompareStore.js';
const CATHOLIC = 'Catholic Social Teaching';
const HUMANRIGHTS = 'International Human Rights Law';

class NotebookDocument extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedParagraph: null,
    }
    this.selectParagraph = this.selectParagraph.bind(this);
  }

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

  selectParagraph(value) {
    this.setState({selectedParagraph: value});
    var offset = document.getElementById('paragraph-' + value).offsetTop;
    ReactDOM.findDOMNode(this.refs["document-" + this.props.document.id]).scrollTop = offset;
  }

  render() {
    return (
      <mui.Paper zDepth={0}>
        <div className='document-head'>
          <Heading title={ this.documentTitle() } />
          <div className='document-head'>
            <Title item={this.props.document} />
            <ParagraphJumpList
              paragraphs={ ItemStore.getItemChildrenInOrder(this.props.document) }
              primaryAction={ this.selectParagraph }
            />
          </div>

          <Document
            ref={"document-" + this.props.document.id}
            documentId={ this.props.document.id }
            bodyStyle={ this.documentBodyStyle() }
            selectedParagraphIds={ CompareStore.allItems() }
            showOnlySelected={true}
            showCompareButton={false}
          >
            <CopyrightNotification item={ this.props.document } align='center' />
          </Document>
        </div>
      </mui.Paper>
    );
  }
}

NotebookDocument.propTypes = {
  document: React.PropTypes.object,
  removeDocument: React.PropTypes.func,
}

export default NotebookDocument;
