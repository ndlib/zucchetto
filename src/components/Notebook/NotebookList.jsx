'use strict'
import React, { Component, PropTypes } from 'react';
import ItemStore from '../../store/ItemStore.js'
import CompareStore from '../../store/CompareStore.js'
import DocumentListItem from '../Document/DocumentListItem.jsx'
import ShareSave from '../Document/ShareSave.jsx'
import Heading from '../Shared/Heading.jsx'
import CompareActions from '../../actions/CompareActions.js'
import _ from 'underscore'

class NotebookList extends Component {
  constructor(props) {
    super(props);
    this.documentClick = this.documentClick.bind(this);
  }

  documentClick(event, item) {
    CompareActions.setColumnItem(item);
  }

  documentList() {
    var clickFunc = this.documentClick;
    var allIds = CompareStore.allItems();

    return(
      _.map(ItemStore.getItemsByMultipleIds(allIds), function (item) {
        return (
          <DocumentListItem key={item.id} item={item} primaryAction={clickFunc} />
        );
      })
    );
  }

  render() {
    return (
      <div className="left-col">
        <h4>Notebook</h4>
          <ul style={{
              paddingLeft: '0',
          }}>
            { this.documentList() }
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
