import  React, { Component } from 'react'
import PropTypes from 'prop-types'
import mui, { Toolbar, ToolbarTitle, ToolbarGroup, FlatButton, FontIcon } from 'material-ui';
import ManageDialog from '../Document/ManageDialog.jsx'
import ShareSaveDialog from '../Document/ShareSaveDialog.jsx'
import BackToSearchButton from '../Document/BackToSearchButton.jsx'
import PrintExportButton from '../Document/PrintExportButton.jsx'

class NotebookToolbar extends Component {

  render() {
    return (
      <Toolbar style={{ zIndex: '1', backgroundColor: '#E4E1D1', borderBottom: "solid 1px #979694" }}>
        <ToolbarGroup className="toolbar-group" style={{float: 'right'}}>
          <ManageDialog />
          <ShareSaveDialog />
          <BackToSearchButton />
          <PrintExportButton />
        </ToolbarGroup>
      </Toolbar>
     );
  }
}

NotebookToolbar.propTypes = {
}


NotebookToolbar.contextTypes = {
  router: PropTypes.object.isRequired
};

export default NotebookToolbar;
