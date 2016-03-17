'use strict'
import React, { Component, PropTypes } from 'react';
import CompareStore from '../../store/CompareStore.js';
import NotebookLink from '../Notebook/NotebookLink.jsx';

class Drawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: CompareStore.allItems().length,
    }
    this.updateCount = this.updateCount.bind(this);
  }

  componentWillMount() {
    CompareStore.on('ItemCompareUpdated', this.updateCount);
  }

  updateCount() {
    this.setState({count: CompareStore.allItems().length});
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
          <NotebookLink disabled={this.state.count <= 2} />
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
