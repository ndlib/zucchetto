'use strict'
import React, { Component, PropTypes } from 'react';
import mui, { Toolbar, ToolbarTitle, ToolbarGroup, FlatButton } from 'material-ui';
import ViewOriginal from './ViewOriginal.jsx';

class DocumentToolbar extends Component {

  constructor(props, context) {
    super(props, context);
    this.clickMetaData = this.clickMetaData.bind(this);
    this.clickDocument = this.clickDocument.bind(this);
  }

  clickMetaData() {
    this.props.buttonFunction('meta');
  }

  clickDocument() {
    this.props.buttonFunction('document');
  }

  render() {
    return (
      <Toolbar style={{position: 'fixed', top: '55px', zIndex: '1', backgroundColor: '#E4E1D1', borderBottom: "solid 1px #979694" }}>
        <ToolbarTitle text={ this.props.document.name } style={{fontSize: '16px'}}/>
        <ToolbarGroup float="right">
          <ViewOriginal documentId={ this.props.document.id } />
        </ToolbarGroup>
        <ToolbarGroup float="right">
          <FlatButton
            label="Information"
            onClick={ this.clickMetaData }
            backgroundColor={ this.props.activeSection === 'meta' ? '#E4E1D1' : 'transparent'}
            />
        </ToolbarGroup>
        <ToolbarGroup float="right">
          <FlatButton
            label="Text"
            onClick={ this.clickDocument }
            backgroundColor={ this.props.activeSection === 'document' ? '#F8F6ED' : 'transparent'}
          />
        </ToolbarGroup>
      </Toolbar>
     );
  }
}

DocumentToolbar.propTypes = {
  document: React.PropTypes.object,
  buttonFunction: React.PropTypes.func,
  activeSection: React.PropTypes.string,
}

DocumentToolbar.defaultProps = {
  document: {},
  buttonFunction: function() {console.log('button clicked')},
  activeSection: 'document'
}

DocumentToolbar.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default DocumentToolbar;
