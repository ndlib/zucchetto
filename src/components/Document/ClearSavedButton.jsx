'use strict'
import React, { Component, PropTypes } from 'react';
import mui, { Dialog, RaisedButton, FontIcon } from 'material-ui';
import CompareActions from '../../actions/CompareActions.js';

class ClearSavedButton extends Component {

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

ClearSavedButton.propTypes = {
  clickAction: React.PropTypes.func,
  style: React.PropTypes.string,
}
ClearSavedButton.defaultProps = { style: {} };

export default ClearSavedButton;
