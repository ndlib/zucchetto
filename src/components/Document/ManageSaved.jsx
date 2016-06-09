'use strict'
import React, { Component, PropTypes } from 'react';
import _ from 'underscore'
import ItemStore from '../../store/ItemStore.js';
import CompareStore from '../../store/CompareStore.js';
import CompareActions from '../../actions/CompareActions.js';
import VaticanID from '../../constants/VaticanID.js';
import HumanRightsID from '../../constants/HumanRightsID.js';
import GroupItemsByParent from '../../modules/GroupItemsByParent.js';
import ItemQueryParams from '../../modules/ItemQueryParams.js';
import mui, { List } from 'material-ui';
import ManageSavedItem from './ManageSavedItem.jsx';
import NotebookLinkString from '../../modules/NotebookLinkString.js';
import EventEmitter from '../../middleware/EventEmitter.js';

class ManageSaved extends Component {

  constructor(props) {
    super(props);
    this.updateList = this.updateList.bind(this);
    this.updatePage = this.updatePage.bind(this);
    this.documentList = this.documentList.bind(this);
    this.state = {
      humanrights_documents: [],
      vatican_douments: [],
    }
  }

  componentWillMount() {
    this.updateList();
    CompareStore.on('ItemCompareUpdated', this.updateList);
  }

  componentWillUnmount() {
    CompareStore.removeListener('ItemCompareUpdated', this.updateList);
  }

  updateList() {
    var humanrights_documents = _.filter(ItemStore.getItemsByMultipleIds(ItemQueryParams('h')), function(item) {
      return item.collection_id == HumanRightsID;
    });
    var vatican_douments = _.filter(ItemStore.getItemsByMultipleIds(ItemQueryParams('v')), function(item) {
      return item.collection_id == VaticanID;
    });
    this.setState({
      humanrights_documents: humanrights_documents,
      vatican_douments: vatican_douments,
    }, this.updatePage());
  }

  documentList() {
    var documents = this.state.vatican_douments.concat(this.state.humanrights_documents);
    let groupedItems = GroupItemsByParent(documents);
    if(documents.length > 0) {
      var itemNodes = [];
      for(var i = 0;  i < groupedItems.length; i++) {
        itemNodes.push(
          <ManageSavedItem docObject={ groupedItems[i] } key= { i }/>
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

  updatePage() {
    this.context.router.push(NotebookLinkString());
    EventEmitter.emit('ReloadNoteBookPage');
  }

  render() {
    return (
      <div>
        <h3>Manage Compared Documents</h3>
        <List style={{ maxHeight: 'calc(40vh - 120px)', overflowY: "scroll" }}>
          { this.documentList() }
        </List>
      </div>
     );
  }
}

ManageSaved.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default ManageSaved;
