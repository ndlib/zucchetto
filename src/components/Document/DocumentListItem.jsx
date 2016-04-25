'use strict'
import React, { Component, PropTypes } from 'react';
import ItemStore from '../../store/ItemStore.js';
import CompareStore from '../../store/CompareStore.js';
import DocumentParagraphListItem from './DocumentParagraphListItem.jsx';

class DocumentListItem extends Component {
  constructor(props) {
    super(props);

    this.primaryAction = this.primaryAction.bind(this);
    this._item = this.props.item;
    this._subItems = this.props.subItems;
    this.setCheckBox = this.setCheckBox.bind(this);
    this.state = {
      checked: CompareStore.getColumn1() === this._item || CompareStore.getColumn2() === this._item,
    };
  }

  componentWillMount() {
    CompareStore.on('CompareColumnsUpdated', this.setCheckBox);
    }

  componentWillUnmount() {
    CompareStore.removeListener('CompareColumnsUpdated', this.setCheckBox);
  }

  setCheckBox() {

    this.setState({checked: CompareStore.getColumn1() === this._item || CompareStore.getColumn2() === this._item});
  }

  primaryAction(event) {
    this.props.primaryAction(event, this._item);
    event.preventDefault();
  }

  checkBox(checked) {
    var checkBox = 'check_box_outline_blank';
    if(checked) {
      checkBox = 'check_box';
    }
    return (<i
      className="material-icons"
      style={{fontSize: '18px', verticalAlign: 'bottom'}}>{checkBox}</i>);
  }

  render() {
    return (
      <li
        onClick={this.primaryAction}
        style={{cursor: 'pointer', margin: "5px"}}
      >
        {this.checkBox(this.state.checked)} {this._item.name}
      </li>
    );
  }
}

DocumentListItem.propTypes = {
  item: React.PropTypes.object,
  subItems: React.PropTypes.array,
  primaryAction: React.PropTypes.func,
}

export default DocumentListItem;
