'use strict'
import React, { Component, PropTypes } from 'react';
import IDFromAtID from "../../modules/IDFromAtID.js";
import CompareStore from "../../store/CompareStore.js";
import CompareActions from "../../actions/CompareActions.js";
import mui from 'material-ui';

class CompareButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: CompareStore.drawerOpen()
    }
  }

  toggleDrawer() {
    CompareStore.toggleDrawer();
  }

  updateDrawer() {
    this.setState({
      drawerOpen: CompareStore.drawerOpen()
    });
  }

  componentWillMount() {
    CompareStore.on('ItemCompareUpdated', this.updateDrawer.bind(this));
  }

  icon() {
    if (this.state.drawerOpen) {
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
      onClick={ this.toggleDrawer.bind(this) }
      />
    );
  }

}

export default CompareButton;
