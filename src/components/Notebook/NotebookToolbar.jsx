'use strict'
import React, { Component, PropTypes } from 'react';
import mui, { Toolbar, ToolbarTitle, ToolbarGroup, FlatButton, FontIcon } from 'material-ui';
import ManageDialog from '../Document/ManageDialog.jsx';
import ShareSaveDialog from '../Document/ShareSaveDialog.jsx'
import BackToSearchButton from '../Document/BackToSearchButton.jsx';

class NotebookToolbar extends Component {

  render() {
    return (
      <Toolbar style={{ zIndex: '1', backgroundColor: '#E4E1D1', borderBottom: "solid 1px #979694" }}>
        <ToolbarGroup className="toolbar-group" float="right">
          <ManageDialog />
          <ShareSaveDialog />
          <BackToSearchButton />
        </ToolbarGroup>
      </Toolbar>
     );
  }
}

NotebookToolbar.propTypes = {
}


NotebookToolbar.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default NotebookToolbar;
