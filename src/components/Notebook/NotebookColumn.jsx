'use strict'
import React, { Component, PropTypes } from 'react';
import ItemStore from '../../store/ItemStore.js';
import NotebookList from './NotebookList.jsx';
import NotebookDocument from './NotebookDocument.jsx';

class NotebookColumn extends Component {
  constructor() {
    super();
    this.state = {
      selectedDocumentId: null,
    };
  }

  selectDocumentClick(documentId) {
    this.setState({ selectedDocumentId: documentId });
  }

  removeDocumentClick(event) {
    this.setState({ selectedDocumentId: false });
  }

  preLoadFinished() {
    this.setState({ loaded: true });
  }

  render() {
    if (this.state.selectedDocumentId) {
      return (
        <NotebookDocument
          documentId={ this.state.selectedDocumentId }
          removeDocument={ this.removeDocumentClick.bind(this) }
        />
      );
    } else {
      return (
        <NotebookList
          vaticanItems={ this.props.vaticanItems }
          humanRightsItems={ this.props.humanRightsItems }
          selectDocument={ this.selectDocumentClick.bind(this) }
        />
      );
    }
  }
}

NotebookColumn.propTypes = {
  vaticanItems: React.PropTypes.array,
  humanRightsItems: React.PropTypes.array,
}

NotebookColumn.defaultProps = {
  vaticanItems: [],
  humanRightsItems: [],
}

export default NotebookColumn;
