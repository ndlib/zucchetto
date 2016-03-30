'use strict'
var React = require('react');
var EventEmitter = require("../../middleware/EventEmitter.js");
var MediaQuery = require('react-responsive');
var SearchPagination = require('./SearchPagination.jsx');
var ListItem = require('./ListItem.jsx');
import ItemStore from '../../store/ItemStore.js';
import IDFromAtID from "../../modules/IDFromAtID.js";
import ItemActions from '../../actions/ItemActions.jsx';

var SearchDisplayList = React.createClass({

  propTypes: {
    items: React.PropTypes.array,
  },

  getDefaultProps: function() {
    return {
      items: [],
    }
  },

  getInitialState: function() {
    return {
      loaded: false,
    }
  },

  componentWillMount: function() {
    ItemActions.preLoadItems();
    ItemStore.on("PreLoadFinished", this.preLoadFinished);
  },

  preLoadFinished() {
    this.setState({ loaded: true });
  },

  itemList: function() {
    var groupedItems = [];
    if(this.props.items.length > 0){
      var itemNodes = this.props.items.map(function(item, index) {
        var fullItem = ItemStore.getItem(IDFromAtID(item['@id']));
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
      for(var i = 0;  i < groupedItems.length; i++) {
        itemNodes.push(
          <ListItem
            groupedItem={groupedItems[i]}
            key={i}
          />
        );
      }

      return (
        <div>
          {itemNodes}
        </div>
      )
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
    if(!this.state.loaded){
      return null;
    }
    return (
      <div>
        {this.itemList()}
      </div>
    );
  },
});

module.exports = SearchDisplayList;
