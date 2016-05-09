'use strict'
import React, { Component, PropTypes } from 'react';
import mui from 'material-ui';

import Header from '../../components/StaticAssets/Header.jsx';
import Document from '../../components/Document/Document.jsx';
import ItemActions from '../../actions/ItemActions.jsx'
import ItemStore from '../../store/ItemStore.js'

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
        <mui.Tabs>
          <mui.Tab label="Search Results">
            <h2>Search Results</h2>
            <p> These would be the selected paragraphs in order of relavance. Options include compare this paragraph. </p>
          </mui.Tab>
          <mui.Tab label="Full Document">
            <Document documentId={ this.state.documentId } />
          </mui.Tab>
          <mui.Tab label="Metadata">
            <h2> Metadata </h2>
            the full document metadata.
          </mui.Tab>
          <mui.Tab label="Download PDF">

          </mui.Tab>
        </mui.Tabs>
      );
    } else {
      return (<div />);
    }
  }

  render() {
    const actions = [
      <mui.FlatButton
        label="Close"
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
        <mui.Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          bodyStyle={{ overflow: 'scroll' }}
        >
        { this.document() }
        </mui.Dialog>
    );
  }
}

DocumentDialog.defaultProps = {
  open: false,
}


export default DocumentDialog;
