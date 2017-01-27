'use strict'
var React = require('react');
var SearchActions = require('../../actions/SearchActions.js');
var SearchStore = require('../../store/SearchStore.js');

var SearchSort = React.createClass({
  getInitialState: function() {
    var state = {
      selectValue: 0,
    }
    return state;
  },

  onChange: function(prop, e) {
    this.setSort(e.target.value);
  },

  setSort: function(sortOption) {
    SearchActions.setSort(sortOption);
  },

  componentWillMount: function() {
    var regex = /\S+&sort=/;
    var sortOption = '';
    if(window.location.search.match(regex)) {
      sortOption = window.location.search.replace(regex, '').split('&')[0];
    }
    SearchStore.addResultsChangeListener(this.handleResultsChange);
  },

  componentWillUnmount: function() {
    SearchStore.removeResultsChangeListener(this.handleResultsChange);
  },

  handleResultsChange: function() {
    this.forceUpdate();
  },

  sortStyle: function() {
    return ({
      display:'inline-block',
      borderRadius: '2px',
      overflow: 'hidden',
      width:'120px',
      verticalAlign: 'middle',
      marginLeft: '5px',
      background: 'url(/images/arrowdown.gif) no-repeat 90% 50% #fff',
      marginTop: '7px',
    });
  },

  sortSelectStyle: function() {
    return ({
      background: 'transparent',
      border: 'none',
      boxShadow: 'none',
      appearance: 'none',
      backgroundColor: 'transparent',
      backgroundImage: 'none',
      width: '130%',
      color: 'black'
    });
  },

  sortOptions: function() {
    return SearchStore.sorts.map(function(option) {
      return(<option key={option.value} value={option.value}>{option.name}</option>);
    });
  },

  render: function() {
    if(SearchStore.sorts.length > 0) {
      return(
        <div>
          <h5 style={{ float: 'left' }}>Sort: </h5>
          <div style={this.sortStyle()}>
            <select
              ref='searchSort'
              autoWidth={false}
              onChange={this.onChange.bind(this, 'selectValue')}
              menuItems={SearchStore.sorts}
              defaultValue={SearchStore.sortOption}
              style={this.sortSelectStyle()}
            >
            {this.sortOptions()}
            </select>
          </div>
        </div>
      );
    }
    else {
      return null;
    }
  }
});
module.exports = SearchSort
