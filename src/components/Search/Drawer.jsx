'use strict'
import React, { Component, PropTypes } from 'react';
import CompareStore from '../../store/CompareStore.js';
import ItemStore from '../../store/ItemStore.js';
import ItemActions from '../../actions/ItemActions.jsx';
import NotebookLink from '../Notebook/NotebookLink.jsx';
import VaticanID from '../../constants/VaticanID.js';
import HumanRightsID from '../../constants/HumanRightsID.js';

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.countParents = this.countParents.bind(this);
    this.updateCount = this.updateCount.bind(this);
    this.preLoadFinished = this.preLoadFinished.bind(this);

    this.state = {
      loaded: false,
      vatCount: 0,
      humanCount: 0,
    }
  }

  componentWillMount() {
    ItemActions.preLoadItems();
    ItemStore.on("PreLoadFinished", this.preLoadFinished);
    CompareStore.on('ItemCompareUpdated', this.updateCount);
  }

  preLoadFinished() {
    this.setState({
      loaded: true,
      vatCount: this.countParents().vatCount,
      humanCount: this.countParents().humanCount,
    });
  }

  countParents() {
    let compareItems = CompareStore.allItems();
    let parentsVat = [];
    let parentsHu = [];
    for (var i = 0; i < compareItems.length; i++) {
      let parent = ItemStore.getItemParent(ItemStore.getItem(compareItems[i]));
      if(parent.collection_id === VaticanID) {
        if(parentsVat.indexOf(parent) < 0) {
          parentsVat.push(parent);
        }
      }
      if(parent.collection_id === HumanRightsID) {
        if(parentsHu.indexOf(parent) < 0) {
          parentsHu.push(parent);
        }
      }
    }

    return {vatCount: parentsVat.length, humanCount: parentsHu.length};
  }
  updateCount() {
    this.setState({
      vatCount: this.countParents().vatCount,
      humanCount: this.countParents().humanCount,
    });
  }

  style() {
    return {
      backgroundColor: '#E4E1D1',
      border: '1px solid #D5B117',
      bottom: '-1px',
      boxShadow: '0px -1px 5px #aaa',
      color: '#224048',
      lineHeight: '30px',
      minHeight: '40px',
      padding: '0 20px',
      position: 'fixed',
      zIndex: '2',
    }
  }

  render() {
    if(!this.state.loaded) {
      return null;
    }

    if(this.state.vatCount + this.state.humanCount > 0) {
      return (
        <div style={this.style()}>
          <h4>Select two or more items to compare.</h4>
          <div>{this.state.vatCount} Catholic Social Teachings</div>
          <div>{this.state.humanCount} International Human Rights Laws</div>
          <NotebookLink disabled={this.state.vatCount + this.state.humanCount < 1} />
          <div style={{clear:'both'}}/>
        </div>
      );
    }
    else {
      return (<div/>);
    }

  }
}

export default Drawer;
