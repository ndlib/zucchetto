'use strict'
var React = require('react');

var SearchBox = require('./SearchBox.jsx');
var NotebookLink = require('../Notebook/NotebookLink.jsx');

var SearchSidebar = React.createClass({

  render: function() {
    return (
      <div className="col-sm-2 left-col" >
        <SearchBox/>
        <NotebookLink />
      </div>
    );
  }
});

module.exports = SearchSidebar;
