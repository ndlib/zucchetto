'use strict'
import React, { Component, PropTypes } from 'react';
import ItemStore from '../../store/ItemStore.js'
import CompareStore from '../../store/CompareStore.js'
import DocumentListItem from '../Document/DocumentListItem.jsx'
import CompareActions from '../../actions/CompareActions.js'
import _ from 'underscore'
import VaticanID from '../../constants/VaticanID.js';
import HumanRightsID from '../../constants/HumanRightsID.js';
import ItemQueryParams from '../../modules/ItemQueryParams.js';
import GroupItemsByParent from '../../modules/GroupItemsByParent.js';
import EventEmitter from '../../middleware/EventEmitter.js';

class NotebookList extends Component {
  constructor(props) {
    super(props);
    var allIds = CompareStore.allItems();

    this.documentClick = this.documentClick.bind(this);
    this.documentList = this.documentList.bind(this);
    this.updateColumnState = this.updateColumnState.bind(this);
    this.state = {
      column1: CompareStore.getColumn1() ?  CompareStore.getColumn1() : null,
      column2: CompareStore.getColumn2() ?  CompareStore.getColumn2() : null,
      humanrights_documents: [],
      vatican_douments: [],
    },
    this.setDocuments = this.setDocuments.bind(this);

  }

  componentWillMount() {
    this.setDocuments();
    CompareStore.on('CompareColumnsUpdated', this.updateColumnState);
    EventEmitter.on('ReloadNoteBookPage', this.setDocuments);
  }

  componentWillUnmount() {
    CompareStore.removeListener('CompareColumnsUpdated', this.updateColumnState);
    EventEmitter.removeListener('ReloadNoteBookPage', this.setDocuments);
  }

  updateColumnState(columnNumber) {
    if(columnNumber === 1) {
      this.setState({column1: null});
    } else if(columnNumber === 2) {
      this.setState({column2: null});
    }
  }

  setDocuments() {
    this.setState({
      humanrights_documents: _.filter(ItemStore.getItemsByMultipleIds(ItemQueryParams('h')), function(item) {
        return item.collection_id == HumanRightsID;
      }),
      vatican_douments: _.filter(ItemStore.getItemsByMultipleIds(ItemQueryParams('v')), function(item) {
        return item.collection_id == VaticanID;
      }),
    });
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
    let groupedItems = GroupItemsByParent(documents);
    if(documents.length > 0) {
      var itemNodes = [];
      for(var i = 0;  i < groupedItems.length; i++) {
        var checked = this.state.column1 === groupedItems[i].doc || this.state.column2 === groupedItems[i].doc;
        itemNodes.push(
          <DocumentListItem
            key={groupedItems[i].doc.id}
            item={groupedItems[i].doc}
            subItems={groupedItems[i].paragraphs}
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
        <h4 className="category">Catholic Social Teachings</h4>
          <ul style={{
            listStyleType: 'none',
            paddingLeft: '1em',
          }}>
            { this.documentList(this.state.vatican_douments) }
          </ul>

          <h4 className="category">International Human Rights</h4>
            <ul style={{
              listStyleType: 'none',
              paddingLeft: '1em',
            }}>
              { this.documentList(this.state.humanrights_documents) }
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
