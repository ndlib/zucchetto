'use strict'
import React, { Component, PropTypes } from 'react';
import mui, { Toolbar, ToolbarTitle, ToolbarGroup, FlatButton } from 'material-ui';
import ViewOriginal from './ViewOriginal.jsx';

class DocumentToolbar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Toolbar>
        <ToolbarTitle text={ this.props.document.name } />
        <ToolbarGroup float="right">
          <ViewOriginal documentId={ this.props.document.id } />
        </ToolbarGroup>
        <ToolbarGroup float="right">
          <FlatButton label="Metadata" />
        </ToolbarGroup>
        <ToolbarGroup float="right">
          <FlatButton label="Document" />
        </ToolbarGroup>
      </Toolbar>
     );
  }
}

DocumentToolbar.propTypes = {
  document: React.PropTypes.object,
}

DocumentToolbar.defaultProps = {
  document: {},
}

export default DocumentToolbar;
