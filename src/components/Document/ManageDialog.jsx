'use strict'
import React, { Component, PropTypes } from 'react';
import mui, { Dialog, FlatButton, FontIcon } from 'material-ui';
import ManageSaved from './ManageSaved.jsx';
import ShareSave from './ShareSave.jsx';

class ManageDialog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
  }

  openDialog() {
    this.setState({ open: true });
  }

  closeDialog() {
    this.setState({
      open: false,
      copyMessage: null
    });
  }


  render() {
    const actions = [
      <FlatButton
        label="Close"
        onTouchTap={ this.closeDialog }
        labelStyle={ { color: 'white' } }
        backgroundColor={ '#224048' }
      />,
    ];

    return (
      <div>
        <FlatButton
          label="Manage Documents"
          labelPosition="after"
          icon={<FontIcon className="material-icons">library_books</FontIcon>}
          onClick={this.openDialog}
          style={{ margin: "10px 24px" }}
        />
        <Dialog
          title="Share or Save this comparison."
          actions={ actions }
          modal={ false }
          open={ this.state.open }
          onRequestClose={ this.closeDialog }
        >
          <ShareSave />
          <ManageSaved />
        </Dialog>
      </div>
    );
  }

}

export default ManageDialog;
