'use strict'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import mui, { Toolbar, ToolbarTitle, ToolbarGroup, FlatButton, FontIcon } from 'material-ui';
import ViewOriginal from './ViewOriginal.jsx';
import BackToSearchButton from './BackToSearchButton.jsx';

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
        <ToolbarGroup firstChild={true}>
        <ToolbarTitle text={ this.props.document.name }
          style={{
            fontSize: '16px',
            maxWidth: 'calc(100vw - 600px)',
            whiteSpace: 'nowrap',
            overflowX: 'hidden',
            textOverflow: 'ellipsis',
            paddingLeft: '7px',
          }}/>
      </ToolbarGroup>
        <ToolbarGroup lastChild={true} style={{float: 'right'}}>
          <ViewOriginal documentId={ this.props.document.id } />
          <BackToSearchButton />
          <FlatButton
            label="Text"
            labelPosition="after"
            icon={ <FontIcon className="material-icons">description</FontIcon> }
            onClick={ this.clickDocument }
            backgroundColor={ this.props.activeSection === 'document' ? '#F8F6ED' : 'transparent'}
            style={{ margin: '10px 5px' }}
          />
          <FlatButton
            label="Information"
            labelPosition="after"
            icon={ <FontIcon className="material-icons">toc</FontIcon> }
            onClick={ this.clickMetaData }
            backgroundColor={ this.props.activeSection === 'meta' ? '#F8F6ED' : 'transparent'}
            style={{ margin: '10px 5px' }}
          />
        </ToolbarGroup>
      </Toolbar>
     );
  }
}

DocumentToolbar.propTypes = {
  document: PropTypes.object,
  buttonFunction: PropTypes.func,
  activeSection: PropTypes.string,
}

DocumentToolbar.defaultProps = {
  document: {},
  buttonFunction: function() {console.log('button clicked')},
  activeSection: 'document'
}

DocumentToolbar.contextTypes = {
  router: PropTypes.object.isRequired
};

export default DocumentToolbar;
