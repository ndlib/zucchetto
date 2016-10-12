'use strict'
import React, { Component, PropTypes } from 'react';
import mui, { Toolbar, ToolbarTitle, ToolbarGroup, FlatButton, FontIcon } from 'material-ui';
import ManageDialog from '../Document/ManageDialog.jsx';
import ShareSaveDialog from '../Document/ShareSaveDialog.jsx'
import BackButton from '../Shared/BackButton.jsx';

class NotebookToolbar extends Component {
  clickBack() {
    this.context.router.goBack();
  }

  render() {
    return (
      <Toolbar style={{ zIndex: '1', backgroundColor: '#E4E1D1', borderBottom: "solid 1px #979694" }}>
        <ToolbarTitle text=""
          style={{
            fontSize: '16px',
          }}/>
        <ToolbarGroup float="right" className="toolbar-group">
          <ManageDialog />
          <ShareSaveDialog />
          <FlatButton
            labelPosition="after"
            label="Back"
            icon={<FontIcon className="material-icons">navigate_before</FontIcon>}
            onClick={ this.clickBack.bind(this) }
            backgroundColor="#E4E1D1"
            style={{ float: 'right'}}
          />
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
