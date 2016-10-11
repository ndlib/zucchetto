'use strict'
import React, { Component, PropTypes } from 'react';
import mui, { Dialog, FlatButton, FontIcon } from 'material-ui';

class ShareSave extends Component {

  constructor(props) {
    super(props);
    this.state = {
      copyMessage: null
    };

    this.copyToClipBoard = this.copyToClipBoard.bind(this);
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
      </div>
    );
  }

}

export default ShareSave;
