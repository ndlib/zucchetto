'use strict'
var React = require('react');
var EventEmitter = require("../../middleware/EventEmitter.js");
var MediaQuery = require('react-responsive');
var SearchPagination = require('./SearchPagination.jsx');
var ListItem = require('./ListItem.jsx');

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
    if(this.props.items.length > 0){
      var itemNodes = this.props.items.map(function(item, index) {
        return (
          <ListItem
            item={item}
            key={item.name}
          />
        );
      });
      if(itemNodes.length === 0) {
        itemNodes = (<div style={{color:'rgba(0, 0, 0, 0.870588)', fontStyle:'italic', textAlign:'center'}}>No matching results could be found.</div>);
      }
      return (
        <div>
          {itemNodes}
        </div>
      )
    }
    return null;
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
