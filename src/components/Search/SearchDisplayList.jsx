'use strict'
var React = require('react');
var EventEmitter = require("../../middleware/EventEmitter.js");
var MediaQuery = require('react-responsive');
var SearchPagination = require('./SearchPagination.jsx');
var ListItem = require('./ListItem.jsx');
import ItemStore from '../../store/ItemStore.js';
import SearchStore from '../../store/SearchStore.js';
import IDFromAtID from "../../modules/IDFromAtID.js";
import SortBy from '../../modules/SortBy.js';
import FilterBy from '../../modules/FilterBy.js';

var nodeCount = 0;

var SearchDisplayList = React.createClass({

  propTypes: {
    groupedHits: React.PropTypes.array,
  },

  componentWillMount: function() {
    SearchStore.addResultsChangeListener(this.handleResultsChange);
  },

  componentWillUnmount: function() {
    SearchStore.removeResultsChangeListener(this.handleResultsChange);
  },

  handleResultsChange: function(collection){
    this.forceUpdate();
  },

  getDefaultProps: function() {
    return {
      groupedHits: [],
    }
  },

  // Creates ListItem nodes from the grouped item hits
  itemList: function(groupedItems) {
    return groupedItems.map(function(item, index) {
      return(
        <ListItem
          key={item.parentItem.id}
          groupedItem={item}
        />
      );
    });
  },

  renderResults: function(groupedItems) {
    return (
      <div>
        <p style={{ fontSize: '12px', margin: '0', paddingRight: '1.5em', textAlign: 'right'}}>
          {groupedItems.length} document(s) found
        </p>
        <div className="search-list results">
          {this.itemList(groupedItems)}
        </div>
      </div>
    );
  },

  renderNoResults: function() {
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
    var groupedItems = [];
    if(this.props.groupedHits.length > 0) {
      groupedItems = this.props.groupedHits.map(function(hit, index) {
        var parentItem = ItemStore.getItem(hit.id);
        return({
          parentItem: parentItem,
          hits: hit.hits,
          name: parentItem.name,
          year: parentItem.metadata.coverage_temporal ? parentItem.metadata.coverage_temporal.values[0].value : "0",
        });
      });

      groupedItems = FilterBy(groupedItems, SearchStore.selectedFilters);
      groupedItems = SortBy(groupedItems, SearchStore.sortOption);
    }

    if(groupedItems.length > 0){
      return this.renderResults(groupedItems);
    }
    return this.renderNoResults();
  },
});


module.exports = SearchDisplayList;
