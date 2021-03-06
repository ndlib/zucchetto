'use strict'
var React = require('react');
var createReactClass = require('create-react-class');
var TitleBar = createReactClass({
  render: function() {
    var content = this.props.children;
    if (!content) {
      content = (
        <a className="navbar-brand" href="/"><i className="glyphicon glyphicon-home"></i> Digital Exhibits <i>and</i> Collections</a>
      );
    }

    return null;
  }
});

// each file will export exactly one component
module.exports = TitleBar;
