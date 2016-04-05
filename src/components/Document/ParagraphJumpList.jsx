'use strict'
import React, { Component, PropTypes } from 'react';
import ItemStore from '../../store/ItemStore.js';
import CompareStore from '../../store/CompareStore.js';

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
    let listOptions = [];

    listOptions.push(
      <option
      >Go To Selected Paragraph
    </option>
    );

    for(var i = 0; i < this.props.paragraphs.length; i++) {
      let item = ItemStore.getItem(this.props.paragraphs[i].key);
      if(CompareStore.itemInCompare(item)) {
        listOptions.push(
          <option
            key={ item.id }
            value={ item.id }
          >{ item.name }
        </option>
        );
      }
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
