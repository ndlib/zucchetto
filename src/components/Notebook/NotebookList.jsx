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
    this.state = {
      column1: null,
      column2: null,
    };
  }

  documentClick(event, item) {
    if(CompareStore.getColumn1() === item) {
      this.setState({column1: null});
      CompareStore.removeColumnItem(1);
    } else if(CompareStore.getColumn2() === item) {
      this.setState({column2: null});
      CompareStore.removeColumnItem(2);
    } else {
      if(this.state.column1 === null) {
        this.setState({column1: item});
      }
      else if(this.state.column2 === null) {
        this.setState({column2: item});
      }
      CompareActions.setColumnItem(item);
    }
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
        var sortedItems = _.sortBy(groupedItems[i].paragraphs, function(o){ return o.metadata.order.values[0].value;});
        var checked = this.state.column1 === groupedItems[i].doc || this.state.column2 === groupedItems[i].doc;
        itemNodes.push(
          <DocumentListItem
            key={groupedItems[i].doc.id}
            item={groupedItems[i].doc}
            subItems={sortedItems}
            primaryAction={clickFunc}
            checked={checked}
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
      <div className="left-col notebook-list">
        <h3>My Notebook</h3>
        <ShareSave />
        <h4 className="category">Catholic Social Teachings</h4>
          <ul style={{
            listStyleType: 'none',
            paddingLeft: '1em',
          }}>
            { this.documentList(this._vatican_douments) }
          </ul>

          <h4 className="category">International Human Rights</h4>
            <ul style={{
              listStyleType: 'none',
              paddingLeft: '1em',
            }}>
              { this.documentList(this._humanrights_documents) }
            </ul>

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
