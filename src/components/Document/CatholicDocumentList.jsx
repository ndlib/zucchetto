'use strict'
import React, { Component, PropTypes } from 'react';
import SortedParents from '../../modules/SortedParents.js';
import DocumentLink from './DocumentLink.jsx';

class CatholicDocumentList extends Component {

  constructor(props){
    super(props);
  }

  list() {
    return SortedParents(this.props.items).map(function(item) {
      if (item.collection_id == "vatican") {
        return (<DocumentLink item={item} key={item.id} />);
      }
    }.bind(this));
  }

  render() {
    return (<div>{this.list()}</div>);
  }

}
CatholicDocumentList.propTypes = {
  items: React.PropTypes.array,
}


export default CatholicDocumentList;
