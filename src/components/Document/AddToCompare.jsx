'use strict'
import React, { Component, PropTypes } from 'react';
import CheckLocalStorage from '../../modules/CheckLocalStorage.js';
import IDFromAtID from "../../modules/IDFromAtID.js";

class AddToCompare extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: CheckLocalStorage(this.props.item['@id']),
    };

    this.addToCompareClick = this.addToCompareClick.bind(this);
  }

  addToCompareClick() {
    this.setState({checked: !this.state.checked});
    this.addToNoteBook(this.props.item);
  }

  addToNoteBook(item) {
    var id = item.id;
    var collection = item.collection_id

    if(window.localStorage.getItem(id)){
      window.localStorage.removeItem(id, collection);
    } else {
      window.localStorage.setItem(id, collection);
    }
    console.log(window.localStorage);
  }

  checked() {
    if(this.state.checked) {
      return (<i className="material-icons add-to-compare-checkbox">check_box</i>);
    }
    return (<i className="material-icons add-to-compare-checkbox">check_box_outline_blank</i>);
  }

  render() {
    return (
      <div
        className="add-to-compare"
        onClick={this.addToCompareClick}
        style={{cursor: 'pointer'}}
        >
          {this.checked()}Compare Document
        </div>
      );
  }
}

AddToCompare.propTypes = {
  item: React.PropTypes.object,
}

export default AddToCompare;
