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
    this.updateDrawer = this.updateDrawer.bind(this);
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
    CompareStore.on('ItemCompareUpdated', this.updateDrawer);
  }

  componentWillUnmount() {
    CompareStore.removeListener('ItemCompareUpdated', this.updateDrawer);
  }

  icon() {
    if (this.props.shortText) {
      return (<mui.FontIcon className="material-icons">clear</mui.FontIcon>);
    } else if (this.state.drawerOpen) {
      return (<mui.FontIcon className="material-icons">keyboard_arrow_up</mui.FontIcon>);
    } else {
      return (<mui.FontIcon className="material-icons">keyboard_arrow_left</mui.FontIcon>);
    }
  }

  label() {
    if (this.props.shortText) {
      return "";
    } else {
      return "Compare Documents";
    }
  }

  render() {
    return (<mui.FlatButton
      label={this.label()}
      labelPosition="before"
      icon={ this.icon() }
      onClick={ this.toggleDrawer.bind(this) }
      />
    );
  }
}

CompareButton.propTypes = {
  shortText: React.PropTypes.bool,
}

CompareButton.defaultProps = {
  shortText: false
}

export default CompareButton;
