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
    this.notebook = this.notebook.bind(this);
  }

  componentWillMount() {
    CompareStore.on('ItemCompareUpdated', this.updateCount);
  }

  updateCount() {
    this.setState({count: CompareStore.allItems().length});
  }

  notebook(count) {
    if( count >= 2) {
      return (<NotebookLink />);
    }
    else {
      return (<div/>);
    }
  }

  style() {
    return {
      backgroundColor: '#E4E1D1',
      color: '#224048',
      lineHeight: '30px',
      marginBottom: '10px',
      minHeight: '40px',
      padding: '0 20px',
      width: '100%',
      zIndex: '2',
    }
  }

  render() {
    return (
      <div style={this.style()}>
        {this.state.count} items selected to compare.
        {this.notebook(this.state.count)}
        <div style={{clear:'both'}}/>
      </div>
    )

  }
}

export default Drawer;
