'use strict'
var React = require('react');
var SearchFacets = require('./SearchFacets.jsx');

var SearchSidebar = React.createClass({


  render: function() {
    return (
      <div style={{display: 'inline-block', width: "20%", float: 'left'}} >
        <h3 style={{paddingLeft:'16px'}}>Filter Results</h3>
        <hr/>
        <SearchFacets/>
      </div>
    );
  }
});

module.exports = SearchSidebar;
