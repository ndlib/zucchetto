'use strict'
var React = require('react');

var SearchBox = require('./SearchBox.jsx');
var VaticanID = require('../../constants/VaticanID.js');

var SearchSidebar = React.createClass({

  render: function() {
    return (
      <div className="col-sm-2 left-col" >
        <SearchBox/>

      </div>
    );
  }
});

module.exports = SearchSidebar;
