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
  itemList: function() {
    return this.props.groupedHits.map(function(hit, index) {
      return(
        <ListItem
          groupedItem={hit}
          key={hit.id}
        />
      );
    });
  },

  renderResults: function() {
    return (
      <div>
        <p style={{ fontSize: '12px', margin: '0', paddingRight: '1.5em', textAlign: 'right'}}>
          {this.props.groupedHits.length} document(s) found
        </p>
        <div className="search-list results">
          {this.itemList()}
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
    if(this.props.groupedHits.length > 0){
      return this.renderResults();
    }
    return this.renderNoResults();
  },
});


module.exports = SearchDisplayList;
