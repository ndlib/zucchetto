'use strict'
import React, { Component, PropTypes } from 'react';
import NotebookList from './NotebookList.jsx';
import NotebookDocument from './NotebookDocument.jsx';
import CompareActions from '../../actions/CompareActions.js'

class NotebookColumn extends Component {
  constructor() {
    super();
    this.state = {
      selectedDocument: null,
    };
  }

  selectDocumentClick(item) {
    CompareActions.setColumnItem(item);
    this.setState({ selectedDocument: item });
  }

  removeDocumentClick(event) {
    CompareActions.removeColumnItem(this.state.selectedDocument);
    this.setState({ selectedDocument: false });
  }

  preLoadFinished() {
    this.setState({ loaded: true });
  }

  render() {
    if (this.state.selectedDocument) {
      return (
        <NotebookDocument
          document={ this.state.selectedDocument }
          removeDocument={ this.removeDocumentClick.bind(this) }
        />
      );
    } else {
      return (
        <NotebookList
          selectDocument={ this.selectDocumentClick.bind(this) }
        />
      );
    }
  }
}

NotebookColumn.propTypes = {
}

NotebookColumn.defaultProps = {
}

export default NotebookColumn;
