'use strict'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IDFromAtID from "../../modules/IDFromAtID.js";
import ItemStore from "../../store/ItemStore.js";
import CompareStore from "../../store/CompareStore.js";
import CompareActions from "../../actions/CompareActions.js";
import mui from 'material-ui';

let TRUE = 'true';
let FALSE = 'false';
let IND = 'indeterminate';

class AddToCompare extends Component {
  constructor(props) {
    super(props);
    this.addToCompareClick = this.addToCompareClick.bind(this);
    this.setStateFromCompareStore = this.setStateFromCompareStore.bind(this);
    this.state = {
      checked: this.getStateFromCompareStore()
    }
  }

  componentWillReceiveProps(nextProps){
    this.setStateFromCompareStore();
  }

  getStateFromCompareStore() {
    if(!this.props.subItems){
      return CompareStore.itemInCompare(this.props.item) ? TRUE : FALSE;
    }
    else {
      let found = false;
      for(var i = 0; i < this.props.subItems.length; i++) {
        if(CompareStore.itemInCompare(this.props.subItems[i])) {
          return TRUE;
        }
      }
      return FALSE;
    }
  }

  setStateFromCompareStore() {
    this.setState({
      checked: this.getStateFromCompareStore()
    });
  }

  addToCompareClick(event) {
    event.preventDefault();
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
        CompareActions.addDoc(this.props.item);
        for(var i = 0; i < this.props.subItems.length; i++) {
          CompareActions.setItem(this.props.subItems[i]);
        }

      } else {
        CompareActions.removeDoc(this.props.item);
        for(var i = 0; i < this.props.subItems.length; i++) {
          CompareActions.removeItem(this.props.subItems[i]);
        }
      }
    }
    else {
      if (this.state.checked === TRUE) {
        var docId = this.props.item['isPartOf/item'] ? IDFromAtID(this.props.item['isPartOf/item']) : this.props.item.id
        CompareActions.addDoc(ItemStore.getItem(docId));
        CompareActions.setItem(this.props.item);
      } else {
        CompareActions.removeItem(this.props.item);
        // TODO: If this was the last item stored for this doc, remove the doc
      }
    }

  }

  checked() {
    if(this.state.checked === TRUE) {
      return (<i className="material-icons add-to-compare-checkbox">clear</i>);
    }
    else if(this.state.checked === FALSE) {
      return (<i className="material-icons add-to-compare-checkbox">add_box</i>);
    }
    else {
      return (<i className="material-icons add-to-compare-checkbox">indeterminate_check_box</i>);
    }
  }

  label() {
    if(this.state.checked === TRUE) {
      return "Clear";
    } else if (this.props.document) {
      return "Compare All"
    }
    else {
      return "Compare";
    }
  }

  render() {
    return (
      <p style={{clear: 'left', margin: 0}}>
        <a
          href="#"
          className="add-to-compare"
          onClick={this.addToCompareClick}
          style={{cursor: 'pointer'}}
          >
            { this.checked() }{ this.label() }
          </a>
        </p>
      );
  }
}

AddToCompare.propTypes = {
  item: PropTypes.object,
  subItems: PropTypes.array,
  document: PropTypes.bool,
}

AddToCompare.defaultProps = {
  document: false,
}

export default AddToCompare;
