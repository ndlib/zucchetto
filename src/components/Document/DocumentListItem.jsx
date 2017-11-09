'use strict'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DocumentParagraphListItem from './DocumentParagraphListItem.jsx';

class DocumentListItem extends Component {
  constructor(props) {
    super(props);

    this.primaryAction = this.primaryAction.bind(this);
    this._item = this.props.item;
    this._subItems = this.props.subItems;
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
        {this.checkBox(this.props.checked)} {this._item.name}
      </li>
    );
  }
}

DocumentListItem.propTypes = {
  item: PropTypes.object,
  subItems: PropTypes.array,
  primaryAction: PropTypes.func,
  checked: PropTypes.bool,
}

DocumentListItem.defaultProps = {
  checked: false,
}

export default DocumentListItem;
