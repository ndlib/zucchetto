'use strict'
import React, { Component, PropTypes } from 'react';
import IDFromAtID from "../../modules/IDFromAtID.js";
import CompareStore from "../../store/CompareStore.js";
import CompareActions from "../../actions/CompareActions.js";
import mui from 'material-ui';

class CompareButton extends Component {

  icon() {
    if (CompareStore.windowOpen()) {
      return (<mui.FontIcon className="material-icons">keyboard_arrow_up</mui.FontIcon>);
    } else {
      return (<mui.FontIcon className="material-icons">keyboard_arrow_left</mui.FontIcon>);
    }
  }

  render() {
    return (<mui.FlatButton
      label="Compare Documents"
      labelPosition="before"
      icon={ this.icon() }
      />
    );
  }

}

export default CompareButton;
