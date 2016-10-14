'use strict'
import React, { Component, PropTypes } from 'react';
import mui, { ListItem, FontIcon } from 'material-ui';
import CompareStore from '../../store/CompareStore.js';
import CompareActions from '../../actions/CompareActions.js';
import ItemStore from '../../store/ItemStore.js';
import VaticanID from '../../constants/VaticanID.js';
class ManageSavedItem extends Component {

  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.style = this.style.bind(this);
  }

  onClick() {
    CompareActions.removeItem(this.props.docObject.doc);
    for(var i = 0; i < this.props.docObject.paragraphs.length; i++) {
      CompareActions.removeItem(this.props.docObject.paragraphs[i]);
    }
    this.props.clickAction();
  }

  style() {
    return {
      display: 'block',
    }
  }

  render() {
    return (
      <ListItem
        style={ this.style()}
        innerDivStyle={{ padding: "8px" }}
        primaryText={this.props.docObject.doc.name}
        rightIcon={
          <FontIcon
            onClick={ this.onClick }
            className="material-icons"
            style={{ margin: '4px 12px' }}

          >delete</FontIcon>
        }
      />
     );
  }
}

ManageSavedItem.propTypes = {
  docObject: React.PropTypes.object,
  clickAction: React.PropTypes.func
}

export default ManageSavedItem;
