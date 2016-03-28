'use strict'
import React, { Component, PropTypes } from 'react';
import IDFromAtID from "../../modules/IDFromAtID.js";
import CompareStore from "../../store/CompareStore.js";
import CompareActions from "../../actions/CompareActions.js";

class AddToCompare extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: CompareStore.itemInCompare(this.props.item),
    };
    this.addToCompareClick = this.addToCompareClick.bind(this);
  }

  addToCompareClick() {
    this.setState({ checked: !this.state.checked }, this.runCompareAction.bind(this));
  }

  runCompareAction() {
    if (this.state.checked) {
      CompareActions.setItem(this.props.item);
    } else {
      CompareActions.removeItem(this.props.item);
    }
  }

  checked() {
    if(this.state.checked) {
      return (<i className="material-icons add-to-compare-checkbox">check_box</i>);
    }
    return (<i className="material-icons add-to-compare-checkbox">check_box_outline_blank</i>);
  }

  render() {
    var label = this.props.subItems ? 'Add Document' : 'Add Section';
    return (
      <div
        className="add-to-compare"
        onClick={this.addToCompareClick}
        style={{cursor: 'pointer'}}
        >
          { this.checked() }{ label }
        </div>
      );
  }
}

AddToCompare.propTypes = {
  item: React.PropTypes.object,
  subItems: React.PropTypes.array,
}

export default AddToCompare;
