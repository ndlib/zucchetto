'use strict'
var React = require('react');
var mui = require('material-ui');
var EventEmitter = require("../../middleware/EventEmitter.js");
var MediaQuery = require('react-responsive');
var SearchStore = require('../../store/SearchStore.js');
var SearchPagination = require('./SearchPagination.jsx');
var ListItem = require('./ListItem.jsx');
var SearchSidebar = require('./SearchSidebar.jsx');

var SearchDisplayList = React.createClass({
  mixins: [
    require('../../mixins/CollectionUrlMixin.jsx'),
  ],

  getInitialState: function () {
    return {
      view: SearchStore.view,
    };
  },


  componentWillMount: function() {
    // View changes don't change the top level query, so we have to listen
    // for those changes in order to force a rerender
    SearchStore.on("SearchStoreViewChanged", this.storeViewChanged);
  },

  storeViewChanged: function() {
    this.setState({ view: SearchStore.view });
  },

  itemList: function() {
    var view = this.state.view;
    var itemNodes = SearchStore.items.map(function(item, index) {
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
      <mui.List>
        {itemNodes}
      </mui.List>
    )
  },

  render: function() {
    return (
      <div>
        <MediaQuery maxWidth={700}>
          <div Depth={0}>
            {this.itemList()}
            <SearchPagination />
          </div>
        </MediaQuery>

        <MediaQuery minWidth={700}>
          <SearchSidebar />

          <div style={{display: 'inline-block', width: "80%"}} zDepth={0}>
            {this.itemList()}
            <SearchPagination />
          </div>
        </MediaQuery>
      </div>
    );
  },
});

module.exports = SearchDisplayList;
