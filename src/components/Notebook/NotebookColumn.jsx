'use strict'
import React, { Component, PropTypes } from 'react';
import NotebookList from './NotebookList.jsx';
import NotebookDocument from './NotebookDocument.jsx';
import CompareActions from '../../actions/CompareActions.js'
import CompareStore from '../../actions/CompareActions.js'
import EmptyColumn from './EmptyColumn.jsx'

class NotebookColumn extends Component {

  removeDocumentClick(event) {
    CompareActions.removeColumnItem(this.props.columnNumber);
  }

  render() {
    if (this.props.item) {
      return (
        <NotebookDocument
          document={ this.props.item }
          removeDocument={ this.removeDocumentClick.bind(this) }
        />
      );
    } else {
      return (
        <EmptyColumn />
      );
    }
  }
}

NotebookColumn.propTypes = {
  item: React.PropTypes.object,
  columnNumber: React.PropTypes.number,
}

NotebookColumn.defaultProps = {
}

export default NotebookColumn;
