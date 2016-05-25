'use strict'
import React, { Component, PropTypes } from 'react';
import mui, { Toolbar, ToolbarTitle, ToolbarGroup, FlatButton } from 'material-ui';
import ViewOriginal from './ViewOriginal.jsx';

class DocumentToolbar extends Component {

  constructor(props, context) {
    super(props, context);
    this.clickMetaData = this.clickMetaData.bind(this);
    this.clickDocument = this.clickDocument.bind(this);
  }

  clickMetaData() {
    this.props.buttonFunction('meta');
  }

  clickDocument() {
    this.props.buttonFunction('document');
  }

  render() {
    return (
      <Toolbar style={{position: 'fixed', top: '55px', zIndex: '1', borderBottom: "solid 1px #979694" }}>
        <ToolbarTitle text={ this.props.document.name } style={{fontSize: '16px'}}/>
        <ToolbarGroup float="right">
          <ViewOriginal documentId={ this.props.document.id } />
        </ToolbarGroup>
        <ToolbarGroup float="right">
          <FlatButton
            label="Metadata"
            onClick={ this.clickMetaData }
            />
        </ToolbarGroup>
        <ToolbarGroup float="right">
          <FlatButton
            label="Document"
            onClick={ this.clickDocument }
          />
        </ToolbarGroup>
      </Toolbar>
     );
  }
}

DocumentToolbar.propTypes = {
  document: React.PropTypes.object,
  buttonFunction: React.PropTypes.func,
}

DocumentToolbar.defaultProps = {
  document: {},
}

DocumentToolbar.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default DocumentToolbar;
