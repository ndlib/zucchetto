'use strict'
import React, { Component, PropTypes } from 'react';
import CompareStore from '../../store/CompareStore.js';
import ItemStore from '../../store/ItemStore.js';
import NotebookLink from '../Notebook/NotebookLink.jsx';

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.countParents = this.countParents.bind(this);
    this.updateCount = this.updateCount.bind(this);
    this.state = {
      count: this.countParents(),
    }
  }

  componentWillMount() {
    CompareStore.on('ItemCompareUpdated', this.updateCount);
  }

  countParents() {
    let compareItems = CompareStore.allItems();
    let parents = [];
    for (var i = 0; i < compareItems.length; i++) {
      let parent = ItemStore.getItemParent(ItemStore.getItem(compareItems[i]));
      if(parents.indexOf(parent) < 0) {
        parents.push(parent);
      }
    }
    return parents.length;
  }
  updateCount() {
    this.setState({count: this.countParents()});
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
    if(this.state.count) {
      return (
        <div style={this.style()}>
          <h4>Select two or more items to compare.</h4>
          <div>{this.state.count} items selected.</div>
          <NotebookLink disabled={this.state.count < 1} />
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
