'use strict'
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GroupBySource from '../../modules/GroupBySource.js';
import SortedParents from '../../modules/SortedParents.js';
import DocumentLink from './DocumentLink.jsx';


class DocumentList extends Component {

  constructor(props) {
    super(props);
    this.list = this.list.bind(this);
    this._headerCount = 0;
  }

  listItem(item) {
    return (<DocumentLink item={item} key={item.id} />);
  }

  header(grouping) {
    return (<h4 key={'heading-' + this.props.type + this._headerCount++}>{grouping}</h4>);
  }

  list() {
    var documents = GroupBySource(SortedParents(this.props.items), this.props.type);
    var documentList = []
    for(var i = 0; i < Object.keys(documents).length; i++) {
      var group = Object.keys(documents)[i];
      documentList.push(this.header(group));
      documentList.push(documents[group].map(function(item) {
        return this.listItem(item);
      }.bind(this)));
    }
    return documentList;
  }

  render() {
    return (<div className="doc-list">{this.list()}</div>);
  }
}


DocumentList.propTypes = {
  items: PropTypes.array,
  type: PropTypes.string,
}

export default DocumentList;
