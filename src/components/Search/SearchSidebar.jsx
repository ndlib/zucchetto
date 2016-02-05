'use strict'
var React = require('react');
var SearchFacets = require('./SearchFacets.jsx');
var SearchBox = require('./SearchBox.jsx');
var VaticanID = require('../../constants/VaticanID.js');

var SearchSidebar = React.createClass({

  render: function() {
    return (
      <div className="col-sm-2 left-col" >
        <SearchBox
          collection={VaticanID}
          primary={true}
          useStore={true}
        />
        <SearchFacets/>
      </div>
    );
  }
});

module.exports = SearchSidebar;
