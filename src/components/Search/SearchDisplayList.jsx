'use strict'
var React = require('react');
var EventEmitter = require("../../middleware/EventEmitter.js");
var MediaQuery = require('react-responsive');
var SearchStore = require('../../store/SearchStore.js');
var SearchPagination = require('./SearchPagination.jsx');
var ListItem = require('./ListItem.jsx');
var SearchSidebar = require('./SearchSidebar.jsx');

const CATHOLIC = 'Catholic Social Teaching';
const HUMANRIGHTS = 'International Human Rights Law';

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

  itemList: function(category) {
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
      <div>
        <h3 style={this.listHeaderStyle()}>{category}</h3>
        {itemNodes}
      </div>
    )
  },
  listHeaderStyle: function() {
    return {
      backgroundColor: '#cacccb',
      padding: '.25em',
      textAlign: 'center',
      textTransform: 'uppercase',
    }
  },

  listStyle: function(side) {
    var ta = side ? side : 'left';
    return {
      backgroundColor: 'transparent',
      fontFamily: 'GPCMed, sans-serif',
      textAlign: ta,
    }
  },
  topLinkStyle: function() {
    return {
      color: '#224048',
      fontSize: '1.2em',
      lineHeight: '2em',
      textTransform: 'uppercase',
    }
  },
  render: function() {
    return (
      <div>
        <MediaQuery maxWidth={700}>
          {this.itemList(CATHOLIC)}
          {this.itemList(HUMANRIGHTS)}
        </MediaQuery>

        <MediaQuery minWidth={700}>
          <SearchSidebar />
          <div className="col-sm-10 right-col" style={this.listStyle()}>
            <div className="row">
              <div
                className="col-sm-5"
                style={this.listStyle()}
              >
                <a href="/" style={this.topLinkStyle()}>« Home</a>

              </div>
              <div
                className="col-sm-5"
                style={this.listStyle('right')}
              >
                <a href="#" style={this.topLinkStyle()}>Share/Save Search Results</a>

              </div>
            </div>
            <div className="col-sm-5" style={this.listStyle()}>
              {this.itemList(CATHOLIC)}
            </div>
            <div className="col-sm-5" style={this.listStyle()}>
              {this.itemList(HUMANRIGHTS)}
            </div>
          </div>
        </MediaQuery>
      </div>
    );
  },
});

module.exports = SearchDisplayList;
