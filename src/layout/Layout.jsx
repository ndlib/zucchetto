'use strict'
var React = require('react');
var createReactClass = require('create-react-class');
var mui = require('material-ui');

var Layout = createReactClass({
  render: function() {

    return (
      <mui.AppCanvas>

        {this.props.children}
      </mui.AppCanvas>
    );
  }
});

// each file will export exactly one component
module.exports = Layout;
