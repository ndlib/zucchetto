'use strict'
import React, { Component, PropTypes } from 'react';
import NotebookList from './NotebookList.jsx';
import NotebookDocument from './NotebookDocument.jsx';
import CompareActions from '../../actions/CompareActions.js'
import CompareStore from '../../actions/CompareActions.js'

class NotebookColumn extends Component {

  removeDocumentClick(event) {
    CompareActions.removeColumnItem(this.props.item);
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
        <div />
      );
    }
  }
}

NotebookColumn.propTypes = {
  item: React.PropTypes.object.isRequired,
}

NotebookColumn.defaultProps = {
}

export default NotebookColumn;
