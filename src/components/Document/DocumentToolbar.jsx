'use strict'
import React, { Component, PropTypes } from 'react';
import mui, { Toolbar, ToolbarTitle, ToolbarGroup, FlatButton, FontIcon } from 'material-ui';
import ViewOriginal from './ViewOriginal.jsx';
import BackButton from '../Shared/BackButton.jsx';

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
      <Toolbar style={{ zIndex: '1', backgroundColor: '#E4E1D1', borderBottom: "solid 1px #979694" }}>
        <ToolbarTitle text={ this.props.document.name }
          style={{
            fontSize: '16px',
            maxWidth: 'calc(100vw - 520px)',
            whiteSpace: 'nowrap',
            overflowX: 'hidden',
            textOverflow: 'ellipsis',
          }}/>
        <ToolbarGroup float="right">
          <ViewOriginal documentId={ this.props.document.id } />
          <BackButton />
          <FlatButton
            label="Text"
            icon={ <FontIcon className="material-icons">description</FontIcon> }
            onClick={ this.clickDocument }
            backgroundColor={ this.props.activeSection === 'document' ? '#F8F6ED' : 'transparent'}
          />
          <FlatButton
            label="Information"
            icon={ <FontIcon className="material-icons">toc</FontIcon> }
            onClick={ this.clickMetaData }
            backgroundColor={ this.props.activeSection === 'meta' ? '#E4E1D1' : 'transparent'}
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
