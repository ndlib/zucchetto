'use strict'
var React = require('react');
var EventEmitter = require("../../middleware/EventEmitter.js");
var MediaQuery = require('react-responsive');
var SearchPagination = require('./SearchPagination.jsx');
var ListItem = require('./ListItem.jsx');
import ItemStore from '../../store/ItemStore.js';
import IDFromAtID from "../../modules/IDFromAtID.js";

var SearchDisplayList = React.createClass({

  propTypes: {
    items: React.PropTypes.array,
  },

  getDefaultProps: function() {
    return {
      items: [],
    }
  },

  itemList: function() {
    var groupedItems = [];
    if(this.props.items.length > 0){
      this.props.items.forEach(function(item, index) {
        var fullItem = ItemStore.getItem(IDFromAtID(item['@id']));
        if (!fullItem.metadata.heading) {
          return;
        }
        var itemParent = ItemStore.getItemParent(fullItem);
        var docExists = false;
        for(var i = 0; i < groupedItems.length; i++){
          if(itemParent && groupedItems[i].doc == itemParent.id) {
            // found parent
            docExists = true;
            groupedItems[i].paragraphs.push(fullItem.id);
          }
        }
        if(itemParent && !docExists) {
          groupedItems.push({doc: itemParent.id, paragraphs: [fullItem.id]});
        }
      });
      var itemNodes = [];
      for(var i = 0;  i < groupedItems.length; i++) {
        itemNodes.push(
          <ListItem
            groupedItem={groupedItems[i]}
            key={i}
          />
        );
      }


    }
    if(groupedItems.length > 0) {
      return (
        <div className="search-list results">
          {itemNodes}
        </div>
      );
    }
    return (
      <div
        style={{
          color:'rgba(0, 0, 0, 0.870588)',
          fontStyle:'italic',
          textAlign:'center'
        }}>No matching results could be found.
      </div>
    );
  },

  render: function() {
    return (
      <div>
        {this.itemList()}
      </div>
    );
  },
});


module.exports = SearchDisplayList;
