'use strict'
import React, { Component, PropTypes } from 'react';
import CompareStore from '../../store/CompareStore.js';
import ItemStore from '../../store/ItemStore.js';
import NotebookLink from '../Notebook/NotebookLink.jsx';
import VaticanID from '../../constants/VaticanID.js';
import HumanRightsID from '../../constants/HumanRightsID.js';
import mui from 'material-ui';

class Drawer extends Component {
  constructor(props, context) {
    super(props, context);
    this.updateCount = this.updateCount.bind(this);
    this.state = {
      totalCount: CompareStore.allItems().length,
      message: "",
      open: false,
    }
  }

  componentWillMount() {
    CompareStore.on('ItemCompareUpdated', this.updateCount);
  }

  componentWillUnmount() {
    CompareStore.removeListener('ItemCompareUpdated', this.updateCount);
  }

  clearAll() {
    CompareStore.clearAll();
  }

  url() {
    let vaticanItems = CompareStore.collectionItems(VaticanID);
    let humanRightItems = CompareStore.collectionItems(HumanRightsID);

    let vString = 'v=' + vaticanItems.join('|');
    let hString = 'h=' + humanRightItems.join('|');

    return '/notebook' + '?' + vString + '&' + hString;
  }

  updateCount() {
    let length = CompareStore.allItems().length

    if (this.state.totalCount != length) {
      this.setState({
        totalCount: length,
        countChange: (length - this.state.totalCount),
        open: true,
      });
    }
  }

  handleActionTouchTap = () => {
    this.setState({
      open: false,
    });
    this.context.router.push(this.url());

  };

  handleChangeDuration = (event) => {
    const value = event.target.value;
    this.setState({
      autoHideDuration: value.length > 0 ? parseInt(value) : 0,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  message() {
    if (this.state.countChange < 0)
      return Math.abs(this.state.countChange) + " Paragraph(s) removed from comparison.";
    else if (this.state.countChange > 0) {
      return Math.abs(this.state.countChange) + " Paragraph(s) added to comparison.";
    }
    return "";
  }

  action() {
    if (this.state.countChange > 0) {
      return "View";
    }
    return "";
  }

  render() {
    return (
      <mui.Snackbar
        className='snack-drawer'
        open={ this.state.open }
        message={ this.message() }
        action={ this.action() }
        autoHideDuration={ 4000 }
        onActionTouchTap={this.handleActionTouchTap}
        onRequestClose={this.handleRequestClose}
      />
    );

    if(CompareStore.drawerOpen()) {
      if (this.state.vatCount === 0 && this.state.humanCount === 0) {
        return (this.emptyDrawer());
      } else {
        return this.drawer();
      }
    }
    else {
      return (<div />);
    }

  }
}

Drawer.contextTypes = {
  router: React.PropTypes.object.isRequired
};


export default Drawer;
