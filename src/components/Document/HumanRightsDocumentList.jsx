'use strict'
import React, { Component, PropTypes } from 'react';

import GroupBySource from '../../modules/GroupBySource.js';
import SortedParents from '../../modules/SortedParents.js';
import DocumentLink from './DocumentLink.jsx';

class HumanRightsDocumentList extends Component {

  constructor(props) {
    super(props);
    this.list = this.list.bind(this);
    this._headerCount = 0;
  }

  listItem(item) {
    return (<DocumentLink item={item} key={item.id} />);
  }

  ihrHeader(grouping) {
    return (<h4 key={'ihr-heading-' + this._headerCount++}>{grouping}</h4>);
  }

  list() {
    var documents = GroupBySource(SortedParents(this.props.items), 'humanrights');
    var documentList = []
    for(var i = 0; i < Object.keys(documents).length; i++) {
      var group = Object.keys(documents)[i];
      documentList.push(this.ihrHeader(group));
      documentList.push(documents[group].map(function(item) {
        return this.listItem(item);
      }.bind(this)));
    }
    return documentList;
  }

  render() {
    return (<div>{this.list()}</div>);
  }
}


HumanRightsDocumentList.propTypes = {
  items: React.PropTypes.array,
}

export default HumanRightsDocumentList;
