'use strict'
import React, { Component, PropTypes } from 'react';
import IDFromAtID from "../../modules/IDFromAtID.js";
import CompareStore from "../../store/CompareStore.js";
import CompareActions from "../../actions/CompareActions.js";

let TRUE = 'true';
let FALSE = 'false';
let IND = 'indeterminate';

class AddToCompare extends Component {
  constructor(props) {
    super(props);
    this.addToCompareClick = this.addToCompareClick.bind(this);
    this.setStateFromCompareStore = this.setStateFromCompareStore.bind(this);
    this.setStateFromCompareStore();
  }

  componentWillMount() {
    CompareStore.on('ItemCompareUpdated', this.setStateFromCompareStore);
  }

  setStateFromCompareStore() {
    if(!this.props.subItems){
      this.state = {
        checked: CompareStore.itemInCompare(this.props.item) ? TRUE : FALSE,
      };
    }
    else {
      let selectedSubItems = 0;
      for(var i = 0; i < this.props.subItems.length; i++) {
        if(CompareStore.itemInCompare(this.props.subItems[i])) {
          selectedSubItems++;
        }
      }
      if(selectedSubItems === 0) {
        this.state = {
          checked: FALSE,
        };
      }
      else if(selectedSubItems === this.props.subItems.length) {
        this.state = {
          checked: TRUE,
        };
      }
      else {
        this.state = {
          checked: IND,
        };
      }
    }
  }

  addToCompareClick() {
    if(this.state.checked === TRUE || this.state.checked === IND) {
      this.setState({ checked: FALSE  }, this.runCompareAction.bind(this));
    }
    else {
      this.setState({ checked: TRUE  }, this.runCompareAction.bind(this));
    }
  }

  runCompareAction() {
    if(this.props.subItems){
      if (this.state.checked === TRUE) {
        for(var i = 0; i < this.props.subItems.length; i++) {
          CompareActions.setItem(this.props.subItems[i]);
        }

      } else {
        for(var i = 0; i < this.props.subItems.length; i++) {
          CompareActions.removeItem(this.props.subItems[i]);
        }
      }
    }
    else {
      if (this.state.checked === TRUE) {
        CompareActions.setItem(this.props.item);
      } else {
        CompareActions.removeItem(this.props.item);
      }
    }

  }

  checked() {
    if(this.state.checked === TRUE) {
      return (<i className="material-icons add-to-compare-checkbox">check_box</i>);
    }
    else if(this.state.checked === FALSE) {
      return (<i className="material-icons add-to-compare-checkbox">check_box_outline_blank</i>);
    }
    else {
      return (<i className="material-icons add-to-compare-checkbox">indeterminate_check_box</i>);
    }
  }

  render() {
    var label = this.props.subItems ? 'Save Document' : 'Save Section';
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
