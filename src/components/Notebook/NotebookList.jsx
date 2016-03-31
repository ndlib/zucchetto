'use strict'
import React, { Component, PropTypes } from 'react';
import ItemStore from '../../store/ItemStore.js'
import CompareStore from '../../store/CompareStore.js'
import DocumentListItem from '../Document/DocumentListItem.jsx'
import ShareSave from '../Document/ShareSave.jsx'
import CompareActions from '../../actions/CompareActions.js'
import _ from 'underscore'
import VaticanID from '../../constants/VaticanID.js';
import HumanRightsID from '../../constants/HumanRightsID.js';
import ItemQueryParams from '../../modules/ItemQueryParams.js';

class NotebookList extends Component {
  constructor(props) {
    super(props);
    var allIds = CompareStore.allItems();

    this.documentClick = this.documentClick.bind(this);
    this.documentList = this.documentList.bind(this);

    this._humanrights_documents = _.filter(ItemStore.getItemsByMultipleIds(ItemQueryParams('h')), function(item) {
      return item.collection_id == HumanRightsID;
    });
    this._vatican_douments = _.filter(ItemStore.getItemsByMultipleIds(ItemQueryParams('v')), function(item) {
      return item.collection_id == VaticanID;
    });
  }

  documentClick(event, item) {
    CompareActions.setColumnItem(item);
    event.preventDefault();
  }

  documentList(documents) {
    let clickFunc = this.documentClick;
    let groupedItems = [];
    if(documents.length > 0) {
      documents.forEach(function(item, index) {
        var itemParent = ItemStore.getItemParent(item);
        var docExists = false;
        for(var i = 0; i < groupedItems.length; i++){
          if(itemParent && groupedItems[i].doc == itemParent) {
            // found parent
            docExists = true;
            groupedItems[i].paragraphs.push(item);
          }
        }
        if(itemParent && !docExists) {
          groupedItems.push({doc: itemParent, paragraphs: [item]});
        }
      });
      var itemNodes = [];
      for(var i = 0;  i < groupedItems.length; i++) {
        let sortedItems = _.sortBy(groupedItems[i].paragraphs, function(o){ return o.metadata.order.values[0].value;});
        itemNodes.push(
          <DocumentListItem
            key={groupedItems[i].doc.id}
            item={groupedItems[i].doc}
            subItems={sortedItems}
            primaryAction={clickFunc}
          />
        );
      }

      return(
        <div>
          {itemNodes}
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <div className="left-col">
        <h4>Catholic Social Teachings</h4>
          <ul style={{
              paddingLeft: '0',
          }}>
            { this.documentList(this._vatican_douments) }
          </ul>

          <h4>Internactional Human Rights</h4>
            <ul style={{
                paddingLeft: '0',
            }}>
              { this.documentList(this._humanrights_documents) }
            </ul>
          <ShareSave />
      </div>
    );
  }
}

NotebookList.propTypes = {
  selectDocument: React.PropTypes.func,
}

NotebookList.defaultProps = {
  vaticanItems: [],
  humanRightsItems: [],
}

export default NotebookList;
