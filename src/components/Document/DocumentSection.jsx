'use strict'
import React, { Component, PropTypes } from 'react';
import DocumentNav from './DocumentNav.jsx';
import CopyrightNotification from './CopyrightNotification.jsx';
import Document from './Document.jsx';
import TopicsInDocuments from '../../modules/TopicsInDocument.js';
import CompareResultsInDocument from '../../modules/CompareResultsInDocument.js';

import mui, { Paper } from 'material-ui';

class DocumentSection extends Component {
  constructor(props, context) {
    super(props, context);

    let baseState = this.props.baseState;
    this._topics = TopicsInDocuments(this.props.parent);
    this._searchIds = [];
    if (baseState !== 'none') {
      this._searchIds = this.props.searchIds;
    }
    this.state = {
      highlightedIndex: baseState,
      showAllParagraphs: true,
    };
    this.highlightSelectedParagraphs = this.highlightSelectedParagraphs.bind(this);
  }

  highlightSelectedParagraphs(event, value) {
    this.setState({highlightedIndex: value});
  }

  toggleHightlightedParagraphs() {
    this.setState({showAllParagraphs: !this.state.showAllParagraphs});
  }

  highlightedDocumentIds() {
    if (this.state.highlightedIndex == "search") {
      return this._searchIds;
    } else if (this.state.highlightedIndex == "compare") {
      return this.props.comparedItems;
    } else if (this._topics[this.state.highlightedIndex]) {
      return this._topics[this.state.highlightedIndex];
    }
    return [];
  }

  collapsedParagraphsClassName() {
    if (!this.state.showAllParagraphs) {
      return "collapsed-paragraphs";
    }
    return ""
  }

  render() {
    return (
      <Paper>
        <Paper zDepth={ 0 } style={{ width: "70%", float: "left" }}>
          <p>
            <CopyrightNotification item={ parent } />
          </p>
          <div className={this.collapsedParagraphsClassName()}>
            <Document
              documentId={ this.props.parent.id }
              selectedParagraphIds={ this.highlightedDocumentIds() }
            />
          </div>
        </Paper>
        <Paper zDepth={ 0 } style={{ width: "30%", float: "left" }}>
          <DocumentNav
            parent={ this.props.parent }
            showSearch={ (this._searchIds.length > 0)}
            numSearchResults={ this._searchIds.length }
            numCompareResults={ CompareResultsInDocument(this.props.parent, this.props.comparedItems) }
            selectedMenuItem={ this.state.highlightedIndex }
            showSelectedParagraphs={ true }
            listedTopics={ this._topics }
            selectedParagraphClick={ this.highlightSelectedParagraphs.bind(this) }
            toggleOnClick={ this.toggleHightlightedParagraphs.bind(this) }
          />
        </Paper>
      </Paper>
     );
  }
}
DocumentSection.propTypes = {
  baseState: React.PropTypes.string,
  searchIds: React.PropTypes.array,
  comparedItems: React.PropTypes.array,
  parent: React.PropTypes.object
}

DocumentSection.defaultProps = {
  baseState: 'none',
  searchIds: [],
  comparedItems: [],
  parent: ''
}

DocumentSection.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default DocumentSection;
