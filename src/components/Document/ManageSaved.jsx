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
import ClearSavedDocumentsButton from './ClearSavedDocumentsButton.jsx';
import NotebookLinkString from '../../modules/NotebookLinkString.js';
import EventEmitter from '../../middleware/EventEmitter.js';

class ManageSaved extends Component {

  constructor(props) {
    super(props);
    this.updatePage = this.updatePage.bind(this);
    this.documentList = this.documentList.bind(this);
    this.setDocuments = this.setDocuments.bind(this);
  }

  documentList() {
    var documents = this._vatican_douments.concat(this._humanrights_documents);
    let groupedItems = GroupItemsByParent(documents);
    if(documents.length > 0) {
      var itemNodes = [];
      for(var i = 0;  i < groupedItems.length; i++) {
        itemNodes.push(
          <ManageSavedItem
            docObject={ groupedItems[i] }
            clickAction={ this.updatePage }
            key= { i }
            />
        );
      }

      return(
        <div className='manage-item'>
          {itemNodes}
        </div>
      );
    }
    return ( <div><i>No documents currently saved.</i></div>);
  }

  componentWillMount() {
    this.setDocuments();
  }

  componentWillUpdate() {
    this.setDocuments();
  }

  setDocuments() {
    this._humanrights_documents = _.filter(ItemStore.getItemsByMultipleIds(ItemQueryParams('h')), function(item) {
      return item.collection_id == HumanRightsID;
    });
    this._vatican_douments = _.filter(ItemStore.getItemsByMultipleIds(ItemQueryParams('v')), function(item) {
      return item.collection_id == VaticanID;
    });
  }

  updatePage() {
    this.context.router.push(NotebookLinkString());
  }

  render() {
    return (
      <div>
        <div>
          <h3 style={{ display: 'inline-block' }}>Remove Compared Documents</h3>
          <ClearSavedDocumentsButton style={{ display: 'inline-block', position: 'absolute', right: '0', margin: '20px 43px' }} clickAction={ this.updatePage } />
        </div>
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
