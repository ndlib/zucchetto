'use strict'
import React, { Component, PropTypes } from 'react';
import _ from 'underscore'
import ItemStore from '../../store/ItemStore.js'
import VaticanID from '../../constants/VaticanID.js';
import HumanRightsID from '../../constants/HumanRightsID.js';
import CompareStore from '../../store/CompareStore.js'
import GroupItemsByParent from '../../modules/GroupItemsByParent.js';
import ItemQueryParams from '../../modules/ItemQueryParams.js';
import mui, { List, ListItem, FontIcon } from 'material-ui';


class ManageSaved extends Component {

  constructor(props) {
    super(props);
    this._humanrights_documents = _.filter(ItemStore.getItemsByMultipleIds(ItemQueryParams('h')), function(item) {
      return item.collection_id == HumanRightsID;
    });
    this._vatican_douments = _.filter(ItemStore.getItemsByMultipleIds(ItemQueryParams('v')), function(item) {
      return item.collection_id == VaticanID;
    });
  }

  documentList(documents) {
    let clickFunc = this.documentClick;
    let groupedItems = GroupItemsByParent(documents);
    if(documents.length > 0) {
      var itemNodes = [];
      for(var i = 0;  i < groupedItems.length; i++) {
        itemNodes.push(
          <ListItem
            innerDivStyle={{ padding: "8px" }}
            key={i} primaryText={groupedItems[i].doc.name}
            rightIcon={ <mui.FontIcon className="material-icons" style={{ margin: '4px 12px' }}>delete</mui.FontIcon> }
          />
        );
      }

      return(
        <div className='manage-item'>
          {itemNodes}
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <div>
        <h3>Manage Compared Documents</h3>
        <List style={{ maxHeight: 'calc(40vh - 120px)', overflowY: "scroll" }}>
          { this.documentList(this._vatican_douments) }
          { this.documentList(this._humanrights_documents) }
        </List>
      </div>
     );
  }
}

export default ManageSaved;
