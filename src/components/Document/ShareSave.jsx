'use strict'
import React, { Component, PropTypes } from 'react';
import Dialog from 'material-ui/lib/dialog';
import FlatButton from 'material-ui/lib/flat-button';

class ShareSave extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      copyMessage: null
    };

    this.openDialog = this.openDialog.bind(this);
    this.closeDialog = this.closeDialog.bind(this);
    this.copyToClipBoard = this.copyToClipBoard.bind(this);
  }

  openDialog() {
    this.setState({ open: true });
  }

  closeDialog() {
    this.setState({ open: false });
  }

  copyToClipBoard() {
    this.refs.copyUrl.select();
    try {
        document.execCommand('copy');
        this.setState({ copyMessage: true});
      }
    catch (err) {
      this.setState({ copyMessage: false});
    }
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

    var copyMessage = '';
    if(this.state.copyMessage !== null) {
      if(this.state.copyMessage) {
        copyMessage = (<div><i>The URL has been copied to your clipboard.</i></div>);
      }
      else {
        copyMessage = (<div><i>Please press Ctrl/Cmd+C to copy.</i></div>);
      }
    }

    return (
      <div>
        <a
          href="#"
          className="top-links"
          onClick={this.openDialog}
        >
          <i
            className="material-icons"
            style={ {verticalAlign: 'middle'} }
          >mail_outline</i>Share/Save</a>
        <Dialog
          title="Share or Save this comparison."
          actions={ actions }
          modal={ false }
          open={ this.state.open }
          onRequestClose={ this.closeDialog }
        >
          <div>Copy the URL from your address bar or provided below to share or save this page.</div>
          <br/>
          <div>
            <input
              ref={ 'copyUrl' }
              type="text"
              readOnly={ true }
              name="copyUrl"
              value={ window.location }
              onClick= { this.copyToClipBoard }
              style={{
                maxWidth: '80%',
                minWidth: '200px',
                verticalAlign: 'top',
              }}
            /> <i
              className="material-icons"
              onClick={ this.copyToClipBoard }
              style={{
                backgroundColor: '#224048',
                color: 'white',
                cursor: 'pointer',
                fontSize: '16px',
                height: '26px',
                padding: '5px',
                width: '26px',
              }}
            >content_copy</i>
          </div>
          <br/>
          { copyMessage }
        </Dialog>
      </div>
    );
  }

}

export default ShareSave;
