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
  }

  onClick() {
    CompareActions.removeItem(this.props.docObject.doc);
    for(var i = 0; i < this.props.docObject.paragraphs.length; i++) {
      CompareActions.removeItem(this.props.docObject.paragraphs[i]);
    }
  }

  render() {
    return (
      <ListItem
        innerDivStyle={{ padding: "8px" }}
        primaryText={this.props.docObject.doc.name}
        onClick={ this.onClick }
        rightIcon={
          <FontIcon
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
}

export default ManageSavedItem;
