'use strict'
var React = require("react");
var mui = require('material-ui');
var Details = require('../display/Details.jsx');

var ItemShow = React.createClass({
  displayName: "Item Show",

  propTypes: {
    item: React.PropTypes.object,
    additionalDetails: React.PropTypes.string,
    height: React.PropTypes.number,
  },

  outerStyles: function() {
    if (this.props.height) {
      return {
        height: this.props.height,
        position: "relative",
      }
    } else {
      return {}
    }
  },

  zoomStyles: function() {
    if (this.props.height) {
      return {
        height: this.props.height,
        position: "absolute",
        top: 0,
        width: "100%",
      }
    } else {
      return {}
    }
  },

  render: function() {
    var prevLink, nextLink, offsetTop;
    if (this.props.height) {
      offsetTop = this.props.height / 2;
    }
    if (this.props.item) {
      return (
        <div style={this.outerStyles()}>
          <Details item={this.props.item} additionalDetails={this.props.additionalDetails} showDetails={true} />
        </div>
      );
    } else {
      return <Loading />;
    }
  }
});

module.exports = ItemShow;
