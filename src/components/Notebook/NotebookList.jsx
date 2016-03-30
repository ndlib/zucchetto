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
    this._humanrights_documents = _.filter(ItemStore.getItemsByMultipleIds(ItemQueryParams('h')), function(item) {
      return item.collection_id == HumanRightsID;
    });
    this._vatican_douments = _.filter(ItemStore.getItemsByMultipleIds(ItemQueryParams('v')), function(item) {
      return item.collection_id == VaticanID;
    });
  }

  documentClick(event, item) {
    CompareActions.setColumnItem(item);
  }

  humanRightsDocumentList() {
    var clickFunc = this.documentClick;
    return(
      _.map(this._humanrights_documents, function (item) {
        return (
          <DocumentListItem key={item.id} item={item} primaryAction={clickFunc} />
        );
      })
    );
  }

  vaticanDocumentList() {
    var clickFunc = this.documentClick;
    return(
      _.map(this._vatican_douments, function (item) {
        return (
          <DocumentListItem key={item.id} item={item} primaryAction={clickFunc} />
        );
      })
    );
  }

  render() {
    return (
      <div className="left-col">
        <h4>Catholic Social Teachings</h4>
          <ul style={{
              paddingLeft: '0',
          }}>
            { this.vaticanDocumentList() }
          </ul>

          <h4>Internactional Human Rights</h4>
            <ul style={{
                paddingLeft: '0',
            }}>
              { this.humanRightsDocumentList() }
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
