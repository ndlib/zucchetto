'use strict'
import React, { Component, PropTypes } from 'react';
import ItemStore from '../../store/ItemStore.js'
import DocumentCard from '../Document/DocumentCard.jsx'
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
    var allIds = _.union(this.props.vaticanItems, this.props.humanRightsItems);

    return(
      _.map(ItemStore.getItemsByMultipleIds(allIds), function (item) {

        return (<DocumentCard key={item.id} item={item} primaryAction={clickFunc} />);
      })
    );
  }

  render() {
    return (
      <div>
        <h4>Select Document to View</h4>
        <ul>
          { this.documentList() }
        </ul>
      </div>
    );
  }
}

NotebookList.propTypes = {
  vaticanItems: React.PropTypes.array,
  humanRightsItems: React.PropTypes.array,
  selectDocument: React.PropTypes.func,
}

NotebookList.defaultProps = {
  vaticanItems: [],
  humanRightsItems: [],
}

export default NotebookList;
