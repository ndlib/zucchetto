'use strict'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mui, {Tabs, Tab, FlatButton, Dialog } from 'material-ui';

import Header from '../../components/StaticAssets/Header.jsx';
import Document from '../../components/Document/Document.jsx';

class DocumentDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: props.open,
    };
  }

  handleOpen = (documentId) => {
    this.setState({
      open: true,
      documentId: documentId
    });
  };

  handleClose = () => {
    this.setState({open: false});
  };

  document() {
    if (this.state.documentId) {
      return (
        <Tabs>
          <Tab label="Search Results">
            <h2>Search Results</h2>
            <p> These would be the selected paragraphs in order of relavance. Options include compare this paragraph. </p>
          </Tab>
          <Tab label="Full Document">
            <Document documentId={ this.state.documentId } />
          </Tab>
          <Tab label="Metadata">
            <h2> Metadata </h2>
            the full document metadata.
          </Tab>
          <Tab label="Download PDF">

          </Tab>
        </Tabs>
      );
    } else {
      return (<div />);
    }
  }

  render() {
    const actions = [
      <FlatButton
        label="Close"
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          bodyStyle={{ overflow: 'scroll' }}
        >
        { this.document() }
        </Dialog>
    );
  }
}

DocumentDialog.defaultProps = {
  open: false,
}


export default DocumentDialog;
