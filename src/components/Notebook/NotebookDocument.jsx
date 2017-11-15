'use strict'
import React, { Component} from 'react';
import PropTypes from 'prop-types'
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
import { Paper } from 'material-ui';

class NotebookDocument extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedParagraph: null,
      height: '100px',
    }
    this.selectParagraph = this.selectParagraph.bind(this);
  }

  componentDidMount() {
    var headerHeight = ReactDOM.findDOMNode(this.refs.documentHead).clientHeight
    this.setState({ height: window.innerHeight - 140 - headerHeight })
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
      height: this.state.height,
    };
  }

  selectParagraph(value) {
    this.setState({selectedParagraph: value});
    var element = document.getElementById('paragraph-' + value);
    var offset = 0;
    if(element != null)
      offset = element.offsetTop;
    ReactDOM.findDOMNode(this.refs["document-" + this.props.document.id]).firstChild.scrollTop = offset;
  }

  render() {
    return (
      <Paper zdepth={0} style={{height: '100%'}}>
        <div className='document-head' ref='documentHead'>
          <Heading title={ this.documentTitle() } />
          <div className='document-head'>
            <Title item={this.props.document} />
            <ParagraphJumpList
              paragraphs={ ItemStore.getItemChildrenInOrder(this.props.document) }
              primaryAction={ this.selectParagraph }
            />
          </div>
        </div>
        <Document
          ref={"document-" + this.props.document.id}
          documentId={ this.props.document.id }
          paragraphs={ ItemStore.getItemChildrenInOrder(this.props.document) }
          bodyStyle={ this.documentBodyStyle() }
          selectedParagraphIds={ CompareStore.allItems() }
          showOnlySelected={true}
          showCompareButton={false}
        >
          <CopyrightNotification item={ this.props.document } align='center' />
        </Document>
      </Paper>
    );
  }
}

NotebookDocument.propTypes = {
  document: PropTypes.object,
  removeDocument: PropTypes.func,
}

export default NotebookDocument;
