'use strict'
import React, { Component, PropTypes } from 'react';
import mui, { Dialog, RaisedButton, FontIcon } from 'material-ui';
import CompareActions from '../../actions/CompareActions.js';

class ClearSavedDocumentsButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    CompareActions.clearItems();
    this.props.clickAction();
  }

  render() {
    return (
      <RaisedButton
        label="Clear all"
        labelPosition="before"
        primary={ false }
        style={ this.props.style }
        onClick={ this.onClick }
        icon={ <FontIcon className="material-icons" style={{ margin: '4px 12px' }}>delete</FontIcon> }
      />

    );
  }
}

ClearSavedDocumentsButton.propTypes = {
  clickAction: React.PropTypes.func,
  style: React.PropTypes.object,
}
ClearSavedDocumentsButton.defaultProps = { style: {} };

export default ClearSavedDocumentsButton;
