'use strict'
import React, { Component, PropTypes } from 'react';
import ItemStore from '../../store/ItemStore.js';

class ParagraphJumpList extends Component {
  constructor(props) {
    super(props);
    this.list = this.list.bind(this);
    this.itemSelect = this.itemSelect.bind(this);
  }

  itemSelect(e) {
    this.props.primaryAction(e.target.value);
  }

  list() {
    let listOptions = []
    for(var i = 0; i < this.props.paragraphs.length; i++) {
      listOptions.push(
        <option
          key={ this.props.paragraphs[i].key }
          value={ this.props.paragraphs[i].key }
        >{ ItemStore.getItem(this.props.paragraphs[i].key).name }
      </option>
      );
    }
    return (
      <select onChange={this.itemSelect}>{listOptions}</select>)
    ;
  }

  render() {
    return (
      <div style={{float:'right'}}>
        {this.list()}
      </div>
    )
  }
}

ParagraphJumpList.propTypes = {
  paragraphs: React.PropTypes.array,
  primaryAction: React.PropTypes.func,
}

export default ParagraphJumpList;
