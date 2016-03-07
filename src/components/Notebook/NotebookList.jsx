'use strict'
import React, { Component, PropTypes } from 'react';
import ItemStore from '../../store/ItemStore.js'
import _ from 'underscore'

class NotebookList extends Component {

  documentClick(event) {
    this.props.selectDocument(event.target.id);
  }

  documentList() {
    var clickFunc = this.documentClick.bind(this);

    return(
      _.map(ItemStore.getItemsByMultipleIds(this.props.vaticanItems), function (item) {
        var parentItem = ItemStore.getItemParent(item);

        return (<li key={ item.id }><a href="#" id={item.id} onClick={clickFunc}>{parentItem.name}</a></li>)
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
