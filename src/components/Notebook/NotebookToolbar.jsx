'use strict'
import React, { Component, PropTypes } from 'react';
import mui, { Toolbar, ToolbarTitle, ToolbarGroup, FlatButton, FontIcon } from 'material-ui';
import ShareSave from '../Document/ShareSave.jsx'
import BackButton from '../Shared/BackButton.jsx'

class NotebookToolbar extends Component {
  clickBack() {
    this.context.router.goBack();
  }

  render() {
    return (
      <Toolbar style={{ zIndex: '1', backgroundColor: '#E4E1D1', borderBottom: "solid 1px #979694" }}>
        <ToolbarTitle text="Compare Documents"
          style={{
            fontSize: '16px',
          }}/>
        <ToolbarGroup float="right" className="toolbar-group">
          <ShareSave />
          <mui.FlatButton
            label="Back"
            icon={<mui.FontIcon className="material-icons">navigate_before</mui.FontIcon>}
            onClick={ this.clickBack.bind(this) }
            backgroundColor="#E4E1D1"
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
