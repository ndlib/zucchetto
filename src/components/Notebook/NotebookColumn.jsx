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

  selectDocumentClick(item) {
    console.log(item);
    this.setState({ selectedDocumentId: item.id });
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
