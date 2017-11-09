'use strict'
var React = require('react');
var createReactClass = require('create-react-class');

var MetadataText = createReactClass({
  displayName: 'Metadata Text',

  propTypes: {
    metadata_field: PropTypes.object.isRequired,
  },

  render: function () {
    return (<div>{this.props.metadata_field.value}</div>);
  }
});

module.exports = MetadataText;
