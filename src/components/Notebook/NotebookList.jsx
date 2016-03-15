'use strict'
import React, { Component, PropTypes } from 'react';
import ItemStore from '../../store/ItemStore.js'
import CompareStore from '../../store/CompareStore.js'
import DocumentCard from '../Document/DocumentCard.jsx'
import Heading from '../Shared/Heading.jsx'
import _ from 'underscore'

class NotebookList extends Component {
  constructor(props) {
    super(props);
    this.documentClick = this.documentClick.bind(this);
  }

  documentClick(event, item) {
    this.props.selectDocument(item);
  }

  documentList() {
    var clickFunc = this.documentClick;
    var allIds = CompareStore.allItems();

    return(
      _.map(ItemStore.getItemsByMultipleIds(allIds), function (item) {
        return (
          <DocumentCard key={item.id} item={item} primaryAction={clickFunc}>
            <div>&nbsp;</div>
          </DocumentCard>
        );
      })
    );
  }

  render() {
    return (
      <div>
        <Heading title="Select Document to Compare" />
        { this.documentList() }
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
