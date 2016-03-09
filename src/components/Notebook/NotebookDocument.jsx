'use strict'
import React, { Component, PropTypes } from 'react';
import Document from '../Document/Document.jsx';
import mui from 'material-ui';

class NotebookDocument extends Component {

  removeClick() {
    this.props.removeDocument();
  }

  style() {
    return {
      overflow: "scroll",
      height: "400px",
    }
  }

  render() {
    return (
      <div style={ this.style() }>
        <div>
          <a href="#" className="remove-document" onClick={ this.removeClick.bind(this) }>
            <mui.FontIcon
              className="material-icons"
            >clear</mui.FontIcon>
          </a>
        </div>
        <Document documentId={ this.props.documentId } />
      </div>
    );
  }
}

NotebookDocument.propTypes = {
  documentId: React.PropTypes.string,
  removeDocument: React.PropTypes.func,
}

export default NotebookDocument;
