'use strict'
import React, { Component, PropTypes } from 'react';
import Document from '../Document/Document.jsx'
import ItemStore from '../../store/ItemStore.js'
import NotebookList from './NotebookList.jsx'

import mui from 'material-ui'
import _ from 'underscore'

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
    this.setState({loaded: true});
  }

  displayDocuemnt(documentId) {
    return (
      <div>
        <div>
          <a href="#" className="remove-document" onClick={ this.removeDocumentClick.bind(this) }>
            <mui.FontIcon
              className="material-icons"
            >clear</mui.FontIcon>
          </a>
        </div>
        <Document documentId={ documentId } />
      </div>
    );
  }

  displayColumn() {
    if (this.state.selectedDocumentId) {
      return this.displayDocuemnt(this.state.selectedDocumentId)
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

  render() {
    return this.displayColumn();
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
